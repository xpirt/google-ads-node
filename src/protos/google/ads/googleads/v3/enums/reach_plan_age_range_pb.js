var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.ReachPlanAgeRange",null,global),proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.displayName="proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum;return proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.ReachPlanAgeRangeEnum.ReachPlanAgeRange={UNSPECIFIED:0,UNKNOWN:1,AGE_RANGE_18_24:503001,AGE_RANGE_18_34:2,AGE_RANGE_18_44:3,AGE_RANGE_18_49:4,AGE_RANGE_18_54:5,AGE_RANGE_18_64:6,AGE_RANGE_18_65_UP:7,AGE_RANGE_21_34:8,AGE_RANGE_25_34:503002,AGE_RANGE_25_44:9,AGE_RANGE_25_49:10,AGE_RANGE_25_54:11,AGE_RANGE_25_64:12,AGE_RANGE_25_65_UP:13,AGE_RANGE_35_44:503003,AGE_RANGE_35_49:14,AGE_RANGE_35_54:15,AGE_RANGE_35_64:16,AGE_RANGE_35_65_UP:17,AGE_RANGE_45_54:503004,AGE_RANGE_45_64:18,AGE_RANGE_45_65_UP:19,AGE_RANGE_50_65_UP:20,AGE_RANGE_55_64:503005,AGE_RANGE_55_65_UP:21,AGE_RANGE_65_UP:503006},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);