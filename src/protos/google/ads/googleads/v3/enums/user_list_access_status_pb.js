var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.UserListAccessStatus",null,global),proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.displayName="proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum;return proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.UserListAccessStatusEnum.UserListAccessStatus={UNSPECIFIED:0,UNKNOWN:1,ENABLED:2,DISABLED:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);