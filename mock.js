global.REQUEST = {"param":function(name){return this.attributes[name]},"attributes":{}, "setParam":function(name,val){this.attributes[name] = val}}

global.RESPONSE = {"body":"","statusCode":200,"json":function(body){this.body = body}}