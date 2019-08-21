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
                .setHost(host,"api_1")
                .setName("api_1")
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
                    }
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
                    "target":"api_1",
                    "args":[ ],
                    "method":"invoke",
                    "okFlag":"_DI_succeed",
                    "koFlag":"_DI_fail",
                    "onOK":0,
                    "onKO":1
                }
            ]
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