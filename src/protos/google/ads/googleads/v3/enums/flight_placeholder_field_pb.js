var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.FlightPlaceholderFieldEnum.FlightPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,DESTINATION_ID:2,ORIGIN_ID:3,FLIGHT_DESCRIPTION:4,ORIGIN_NAME:5,DESTINATION_NAME:6,FLIGHT_PRICE:7,FORMATTED_PRICE:8,FLIGHT_SALE_PRICE:9,FORMATTED_SALE_PRICE:10,IMAGE_URL:11,FINAL_URLS:12,FINAL_MOBILE_URLS:13,TRACKING_URL:14,ANDROID_APP_LINK:15,SIMILAR_DESTINATION_IDS:16,IOS_APP_LINK:17,IOS_APP_STORE_ID:18},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);