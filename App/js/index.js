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
                .setHost(host,"api_init")
                .setName("api_init")
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
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_add")
                .setRequestDataSource([
                    {
                        "type":"form",
                        "name":"group_add",
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
                .setHost(host,"panel")
                .setDock("none")
                .setLeft("5.833333333333333em")
                .setTop("8.333333333333334em")
                .setWidth("22.5em")
                .setHeight("27.5em")
                .setCaption("数据表格")
            );
            
            host.panel.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"treegrid")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"key",
                        "caption":"Key",
                        "type":"label",
                        "width":"10.583333333333334em"
                    },
                    {
                        "id":"value",
                        "caption":"Value",
                        "type":"label",
                        "width":"10.583333333333334em"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group_add")
                .setLeft("35.833333333333336em")
                .setTop("27.5em")
                .setWidth("23.333333333333332em")
                .setHeight("13.333333333333334em")
                .setCaption("新增数据")
            );
            
            host.group_add.append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn_add")
                .setDirtyMark(false)
                .setLeft("5.75em")
                .setTop("7.583333333333333em")
                .setWidth("10.666666666666666em")
                .setHeight("2.8333333333333335em")
                .setCaption("新增数据")
                .onClick([
                    {
                        "desc":"表单验证",
                        "type":"control",
                        "target":"group_add",
                        "args":[ ],
                        "method":"checkValid",
                        "event":1
                    },
                    {
                        "desc":"调用增加api",
                        "type":"control",
                        "target":"api_add",
                        "args":[ ],
                        "method":"invoke",
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "onOK":0,
                        "onKO":1
                    },
                    {
                        "desc":"清空表单",
                        "type":"control",
                        "target":"group_add",
                        "args":[ ],
                        "method":"formClear"
                    },
                    {
                        "desc":"获取数据api",
                        "type":"control",
                        "target":"api_init",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail"
                    }
                ])
            );
            
            host.group_add.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ikey1")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("0.9166666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("key")
            );
            
            host.group_add.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ivalue1")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("4.25em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("value")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"group_amend")
                .setLeft("35.833333333333336em")
                .setTop("12.5em")
                .setWidth("23em")
                .setHeight("12.5em")
                .setCaption("修改数据")
                .setToggleBtn(false)
            );
            
            host.group_amend.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ikey")
                .setName("key")
                .setReadonly(true)
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("0.9166666666666666em")
                .setWidth("18.833333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("key")
            );
            
            host.group_amend.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ivalue")
                .setName("value")
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("4.25em")
                .setWidth("18.833333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("value")
            );
            
            host.group_amend.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btn_amend")
                .setDisabled(true)
                .setLeft("6.583333333333333em")
                .setTop("7.5em")
                .setWidth("9.833333333333334em")
                .setHeight("2.6666666666666665em")
                .setCaption("修改数据")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btn_delete")
                .setDisabled(true)
                .setLeft("38.333333333333336em")
                .setTop("7.5em")
                .setWidth("13.166666666666666em")
                .setHeight("2.6666666666666665em")
                .setCaption("删除数据")
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
                        "target":"treegrid",
                        "args":[ ],
                        "method":"removeAllRows"
                    },
                    {
                        "desc":"添加数据",
                        "type":"control",
                        "target":"treegrid",
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
                    "desc":"调用初始化api",
                    "type":"control",
                    "target":"api_init",
                    "args":[ ],
                    "method":"invoke",
                    "onOK":0,
                    "onKO":1,
                    "okFlag":"_DI_succeed",
                    "koFlag":"_DI_fail"
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