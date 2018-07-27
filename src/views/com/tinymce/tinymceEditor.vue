<!-- Created by Weiun on 2017/1/17.-->
<!-- 基于tinymce富文本编辑框 -->
<template>
    <div>
        <textarea :id='id' :value='value'></textarea>
    </div>
</template>
<script>
import util from "@libs/util";
import http from "@libs/httpService";
// Import TinyMCE
import tinymce from "tinymce/tinymce";
import "tinymce/themes/modern/theme";
import "tinymce/plugins/advlist";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/paste";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/colorpicker";
const INIT = 0;
const CHANGED = 2;
// var EDITOR = null
export default {
    props: {
        value: {
            type: String,
            editor: null,
            required: true
        },
        height: {
            type: Number,
            default: function() {
                return 300;
            }
        },
        // 七牛文件上传空间定义
        qiniuBucket: {
            type: String,
            required: true
        },
        // 额外的设置
        setting: {}
    },
    data() {
        return {
            id: "editor-" + new Date().getMilliseconds(),
            status: INIT,
            accept: "image/jpeg, image/png",
            maxSize: 2097152,
            url: "https://upload.qiniup.com"
        };
    },
    mounted() {
        if (this.qiniuBucket == "intl") {
            // 国际空间上传地址变更
            this.url = "http://upload-na0.qiniup.com";
        }
        const _this = this;
        const setting = {
            selector: "#" + _this.id,
            language: "zh_CN",
            language_url: "/static/tinymce/zh_CN.js",
            skin_url: "/static/tinymce/skins/lightgray",
            height: _this.height,
            upload_image_url: "", // 配置的上传图片的路由
            init_instance_callback: function(editor) {
                // EDITOR = editor
                console.log("Editor: " + editor.id + " is now initialized.");
                editor.on("input change undo redo", () => {
                    var content = editor.getContent();
                    _this.$emit("show", content);
                });
            },
            content_style: `
                *                         { padding:0; margin:0; }
                html, body                { height:100%; }
                img                       { max-width:100%; display:block;height:auto; }
                a                         { text-decoration: none; }
                iframe                    { width: 100%; }
                p                         { line-height:1.6; margin: 0px; }
                table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
                .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
                ul,ol                     { list-style-position:inside; }
            `,
            insert_button_items: "image link | inserttable",
            paste_retain_style_properties: "all",
            paste_word_valid_elements: "*[*]", // word需要它
            paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
            paste_convert_word_fake_lists: false, // 插入word文档需要该属性
            paste_webkit_styles: "all",
            paste_merge_formats: true,
            nonbreaking_force_tab: false,
            paste_auto_cleanup_on_paste: false,
            plugins: [
                "advlist link image",
                "code",
                "table textcolor paste textcolor colorpicker"
            ],
            // 配置
            toolbar_items_size: "small",
            block_formats:
                "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;",
            toolbar1:
                "formatselect | table link unlink uploadimg image media | insertfile undo redo", // 工具栏1
            toolbar2:
                "fontselect | fontsizeselect backcolor forecolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | removeformat", // 工具栏2
            // 图片上传
            images_upload_handler: function(blobInfo, success, failure) {
                if (blobInfo.blob().size > _this.maxSize) {
                    failure("文件体积过大");
                    return;
                }
                if (_this.accept.indexOf(blobInfo.blob().type) < 0) {
                    failure("图片格式错误");
                    return;
                }
                // 获取上传token
                let url = http.addSID(http.urlCommon + http.apiUrl.api);
                let body = {
                    biz_module: "filesService",
                    biz_method: "getQiNiuToken",
                    version: 1,
                    time: 0,
                    sign: "",
                    biz_param: {
                        bucketName: _this.qiniuBucket
                    }
                };
                let localTime = new Date().getTime();
                body.time = localTime - -window.localStorage.difTime || 0;
                body.sign = http.getSign(
                    "biz_module=" +
                        body.biz_module +
                        "&biz_method=" +
                        body.biz_method +
                        "&time=" +
                        body.time
                );
                $.ajax({
                    url: url,
                    data: JSON.stringify(body),
                    cache: false,
                    async: false,
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function(result) {
                        if (result.code == "1c01") {
                            let token = result.biz_result.token;
                            let url = result.biz_result.url;
                            // 上传到7牛
                            let fileName = blobInfo.filename;
                            let index = fileName.lastIndexOf(".");
                            if (index > 0) {
                                let ext = fileName.substring(index);
                                fileName =
                                    new Date().getTime() +
                                    "_" +
                                    util.randomString(8) +
                                    ext;
                            }
                            const xhr = new XMLHttpRequest();
                            xhr.withCredentials = true; // 同步上传
                            xhr.open("POST", _this.url);
                            xhr.setRequestHeader(
                                "Content-Type",
                                "application/octet-stream"
                            );
                            const formData = new FormData();
                            formData.append("token", token);
                            formData.append("key", fileName);
                            formData.append("file", blobInfo.blob());
                            xhr.onload = function() {
                                if (xhr.status === 200) {
                                    const json = JSON.parse(xhr.responseText);
                                    success(url + "/" + json.key);
                                } else {
                                    failure("上传失败: " + xhr.status);
                                    return;
                                }
                            };
                            xhr.onerror = function() {
                                failure("上传失败: " + xhr.status);
                            };
                            xhr.send(formData);
                        } else {
                            failure("上传失败: 获取上传Token失败");
                        }
                    },
                    error: function(error) {
                        failure("上传失败: " + error.status);
                    }
                });
            }
        };
        Object.assign(setting, _this.setting);
        tinymce.init(setting);
    },
    methods: {},
    beforeDestroy: function() {
        tinymce.get(this.id).destroy();
    },
    watch: {
        value: function(val) {
            console.log("init " + val);
            let a =
                this.status === INIT ||
                tinymce.activeEditor.getContent() !== val;
            if (a) {
                tinymce.activeEditor.setContent(val);
            }
            this.status = CHANGED;
        }
    }
};
</script>
