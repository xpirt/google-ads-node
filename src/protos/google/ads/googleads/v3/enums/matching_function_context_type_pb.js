var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType",null,global),proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.displayName="proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum;return proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.MatchingFunctionContextTypeEnum.MatchingFunctionContextType={UNSPECIFIED:0,UNKNOWN:1,FEED_ITEM_ID:2,DEVICE_NAME:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);