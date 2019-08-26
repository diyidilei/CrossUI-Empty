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