var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError",null,global),proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.displayName="proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum;return proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_REFERENCE_REMOVED_FEED:2,INVALID_FEED_NAME:3,INVALID_FEED_ATTRIBUTE_NAME:4},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);