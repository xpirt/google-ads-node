var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.CallPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.CallPlaceholderFieldEnum.CallPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,PHONE_NUMBER:2,COUNTRY_CODE:3,TRACKED:4,CONVERSION_TYPE_ID:5,CONVERSION_REPORTING_STATE:6},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);