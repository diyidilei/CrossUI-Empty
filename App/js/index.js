// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"初始化数据")
                .setName("初始化数据")
                .setQueryURL("https://www.crossui.com/demo/CRUD/request.php")
                .setResponseCallback([
                    {
                        "type":"host",
                        "name":"refreshGrid"
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"getlist"
                    }
                })
                .beforeData([
                    {
                        "desc":"数据错误",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}",
                            ""
                        ],
                        "method":"alert",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"defined",
                                "right":""
                            }
                        ],
                        "onOK":2,
                        "return":false
                    },
                    "_添加数据_beforedata"
                ])
                .onError([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "失败了",
                            "没想到我们失败了"
                        ],
                        "method":"pop"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"add_data")
                .setName("add_data")
                .setQueryURL("https://www.crossui.com/demo/CRUD/request.php")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"添加Group",
                        "path":"paras"
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"create"
                    }
                })
                .beforeData([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}",
                            "111111111111"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "return":false
                    }
                ])
                .onError([
                    {
                        "desc":"异常处理",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.onerror}",
                            undefined,
                            undefined,
                            "{args[1]}"
                        ],
                        "method":"call"
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"updata")
                .setName("updata")
                .setQueryURL("https://www.crossui.com/demo/CRUD/request.php")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"更新Group",
                        "path":""
                    }
                ])
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"update"
                    }
                })
                .beforeData([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "return":false
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"del_data")
                .setName("del_data")
                .setQueryURL("https://www.crossui.com/demo/CRUD/request.php")
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"delete"
                    }
                })
                .beforeData([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[1].error.message}"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"{args[1].error}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "return":false
                    }
                ])
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"add_create")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"add_from",
                        "path":"paras"
                    }
                ])
                .setQueryURL("https://www.crossui.com/demo/CRUD/request.php")
                .setQueryArgs({
                    "key":"DBProcess",
                    "paras":{
                        "action":"create"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("6.666666666666667em")
                .setTop("5em")
                .setWidth("24.166666666666668em")
                .setHeight("25.833333333333332em")
                .setCaption("数据列表")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid2")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("23.166666666666668em")
                .setHeight("22.416666666666668em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"label",
                        "caption":"标题",
                        "type":"label",
                        "width":"11em"
                    },
                    {
                        "id":"input",
                        "caption":"内容",
                        "type":"label",
                        "width":"11em"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btn_delete")
                .setLeft("40em")
                .setTop("5.833333333333333em")
                .setWidth("9.833333333333334em")
                .setHeight("2.6666666666666665em")
                .setCaption("删除")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"添加Group")
                .setLeft("5.833333333333333em")
                .setTop("32.5em")
                .setWidth("21.666666666666668em")
                .setHeight("12.5em")
                .setCaption("添加")
            );
            
            host.添加Group.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setDirtyMark(false)
                .setLeft("6.583333333333333em")
                .setTop("7.583333333333333em")
                .setWidth("7em")
                .setCaption("添加")
                .onClick([
                    {
                        "desc":"表单验证",
                        "type":"control",
                        "target":"添加Group",
                        "args":[ ],
                        "method":"checkValid",
                        "event":1
                    },
                    {
                        "desc":"调用api",
                        "type":"control",
                        "target":"add_data",
                        "args":[ ],
                        "method":"invoke",
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"添加数据",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            "{page.xui_ui_panel4.getUpdateFormValues()}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"清除表单",
                        "type":"control",
                        "target":"更新Group",
                        "args":[ ],
                        "method":"formClear"
                    },
                    {
                        "desc":"作为最后一个",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            ""
                        ],
                        "method":"setActiveRow",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "timeout":0,
                        "resetid":""
                    }
                ])
            );
            
            host.添加Group.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("0.9166666666666666em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("标题")
            );
            
            host.添加Group.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("4.25em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("内容")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"更新Group")
                .setLeft("32.5em")
                .setTop("27.5em")
                .setWidth("21.666666666666668em")
                .setHeight("12.5em")
                .setCaption("更新")
            );
            
            host.更新Group.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button18")
                .setDirtyMark(false)
                .setLeft("6.583333333333333em")
                .setTop("7.583333333333333em")
                .setWidth("7em")
                .setCaption("更新")
                .onClick([
                    {
                        "desc":"表单验证",
                        "type":"control",
                        "target":"更新Group",
                        "args":[ ],
                        "method":"checkValid",
                        "event":1
                    },
                    {
                        "desc":"调用api",
                        "type":"control",
                        "target":"add_data",
                        "args":[ ],
                        "method":"invoke",
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"更新数据",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            "",
                            "{page.xui_ui_panel4.getSetFormValues()}"
                        ],
                        "method":"updateRow",
                        "conditions":[
                            {
                                "left":"{temp.okData}",
                                "symbol":"non-empty",
                                "right":""
                            }
                        ],
                        "timeout":0,
                        "resetid":""
                    },
                    {
                        "desc":"清除表单",
                        "type":"control",
                        "target":"xui_ui_group1",
                        "args":[ ],
                        "method":"formClear"
                    }
                ])
            );
            
            host.更新Group.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("0.9166666666666666em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("标题")
            );
            
            host.更新Group.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input44")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("4.25em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("内容")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"add_from")
                .setLeft("34.166666666666664em")
                .setTop("11.666666666666666em")
                .setWidth("21.666666666666668em")
                .setHeight("12.5em")
                .setCaption("添加123456")
            );
            
            host.add_from.append(
                xui.create("xui.UI.Input")
                .setHost(host,"add_input_key")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("1.5833333333333333em")
                .setTop("1.75em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("标题")
            );
            
            host.add_from.append(
                xui.create("xui.UI.Input")
                .setHost(host,"add_input_value")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("1.5833333333333333em")
                .setTop("4.25em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("内容")
            );
            
            host.add_from.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(false)
                .setLeft("7.416666666666667em")
                .setTop("7.583333333333333em")
                .setWidth("10.333333333333334em")
                .setCaption("添加")
                .onClick([
                    {
                        "desc":"验证",
                        "type":"control",
                        "target":"add_from",
                        "args":[ ],
                        "method":"checkValid",
                        "event":1
                    },
                    {
                        "desc":"调用api",
                        "type":"control",
                        "target":"add_create",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{
            "refreshGrid":{
                "desc":"",
                "params":[
                    {
                        "id":"response",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"清除数据",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[ ],
                        "method":"removeAllRows"
                    },
                    {
                        "desc":"添加数据",
                        "type":"control",
                        "target":"xui_ui_treegrid2",
                        "args":[
                            "{args[0].data}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows"
                    }
                ]
            },
            "onerror":{
                "desc":"",
                "params":[
                    {
                        "id":"message",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"alert",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args[0]}"
                        ],
                        "method":"alert",
                        "onOK":2
                    }
                ]
            }
        },
        events:{
            "onReady":[
                {
                    "desc":"获取数据",
                    "type":"control",
                    "target":"初始化数据",
                    "args":[ ],
                    "method":"invoke",
                    "okFlag":"_DI_succeed",
                    "koFlag":"_DI_fail",
                    "onOK":0,
                    "onKO":1
                }
            ]
        },
        /**
         * 在得到数据之前调用.  返回false可以阻止进一步动作
         * @method beforeData [xui.APICaller event]
         * @param {xui} profile .Profile
         * @param {Object} rspData , 从远程调用返回的数据
         * @param {} requestId  String
        */
        _添加数据_beforedata:function(profile, rspData, requestId){
            var ns = this, uictrl = profile.boxing();
        },
        /**
         * 在出现错误后调用
         * @method onError [xui.APICaller event]
         * @param {xui} profile .Profile
         * @param {Object} rspData , 从远程调用返回的数据
         * @param {} requestId  String
        */
        _添加数据_onerror:function(profile, rspData, requestId){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});