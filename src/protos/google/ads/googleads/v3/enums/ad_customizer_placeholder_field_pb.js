var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,INTEGER:2,PRICE:3,DATE:4,STRING:5},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);