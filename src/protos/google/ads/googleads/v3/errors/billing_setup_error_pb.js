var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.BillingSetupError",null,global),proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.displayName="proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum;return proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.BillingSetupErrorEnum.BillingSetupError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_USE_EXISTING_AND_NEW_ACCOUNT:2,CANNOT_REMOVE_STARTED_BILLING_SETUP:3,CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT:4,BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS:5,INVALID_PAYMENTS_ACCOUNT:6,BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY:7,INVALID_START_TIME_TYPE:8,THIRD_PARTY_ALREADY_HAS_BILLING:9,BILLING_SETUP_IN_PROGRESS:10,NO_SIGNUP_PERMISSION:11,CHANGE_OF_BILL_TO_IN_PROGRESS:12,PAYMENTS_PROFILE_NOT_FOUND:13,PAYMENTS_ACCOUNT_NOT_FOUND:14,PAYMENTS_PROFILE_INELIGIBLE:15,PAYMENTS_ACCOUNT_INELIGIBLE:16,CUSTOMER_NEEDS_INTERNAL_APPROVAL:17,PAYMENTS_ACCOUNT_INELIGIBLE_CURRENCY_CODE_MISMATCH:19},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);