var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.GeoTargetingType",null,global),proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.displayName="proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum;return proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.GeoTargetingTypeEnum.GeoTargetingType={UNSPECIFIED:0,UNKNOWN:1,AREA_OF_INTEREST:2,LOCATION_OF_PRESENCE:3},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);