var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.FieldMaskError",null,global),proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.displayName="proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum;return proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.FieldMaskErrorEnum.FieldMaskError={UNSPECIFIED:0,UNKNOWN:1,FIELD_MASK_MISSING:5,FIELD_MASK_NOT_ALLOWED:4,FIELD_NOT_FOUND:2,FIELD_HAS_SUBFIELDS:3},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);