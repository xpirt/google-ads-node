var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType",null,global),proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.displayName="proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum;return proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType={UNSPECIFIED:0,UNKNOWN:1,WEBPAGE:2,WEBPAGE_ONCLICK:3,CLICK_TO_CALL:4,WEBSITE_CALL:5},goog.object.extend(exports,proto.google.ads.googleads.v2.enums);