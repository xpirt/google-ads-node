var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_ad_customizer_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/ad_customizer_placeholder_field_pb.js"),google_ads_googleads_v3_enums_affiliate_location_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/affiliate_location_placeholder_field_pb.js"),google_ads_googleads_v3_enums_app_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/app_placeholder_field_pb.js"),google_ads_googleads_v3_enums_call_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/call_placeholder_field_pb.js"),google_ads_googleads_v3_enums_callout_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/callout_placeholder_field_pb.js"),google_ads_googleads_v3_enums_custom_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/custom_placeholder_field_pb.js"),google_ads_googleads_v3_enums_dsa_page_feed_criterion_field_pb=require("../../../../../google/ads/googleads/v3/enums/dsa_page_feed_criterion_field_pb.js"),google_ads_googleads_v3_enums_education_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/education_placeholder_field_pb.js"),google_ads_googleads_v3_enums_feed_mapping_criterion_type_pb=require("../../../../../google/ads/googleads/v3/enums/feed_mapping_criterion_type_pb.js"),google_ads_googleads_v3_enums_feed_mapping_status_pb=require("../../../../../google/ads/googleads/v3/enums/feed_mapping_status_pb.js"),google_ads_googleads_v3_enums_flight_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/flight_placeholder_field_pb.js"),google_ads_googleads_v3_enums_hotel_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/hotel_placeholder_field_pb.js"),google_ads_googleads_v3_enums_job_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/job_placeholder_field_pb.js"),google_ads_googleads_v3_enums_local_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/local_placeholder_field_pb.js"),google_ads_googleads_v3_enums_location_extension_targeting_criterion_field_pb=require("../../../../../google/ads/googleads/v3/enums/location_extension_targeting_criterion_field_pb.js"),google_ads_googleads_v3_enums_location_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/location_placeholder_field_pb.js"),google_ads_googleads_v3_enums_message_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/message_placeholder_field_pb.js"),google_ads_googleads_v3_enums_placeholder_type_pb=require("../../../../../google/ads/googleads/v3/enums/placeholder_type_pb.js"),google_ads_googleads_v3_enums_price_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/price_placeholder_field_pb.js"),google_ads_googleads_v3_enums_promotion_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/promotion_placeholder_field_pb.js"),google_ads_googleads_v3_enums_real_estate_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/real_estate_placeholder_field_pb.js"),google_ads_googleads_v3_enums_sitelink_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/sitelink_placeholder_field_pb.js"),google_ads_googleads_v3_enums_structured_snippet_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/structured_snippet_placeholder_field_pb.js"),google_ads_googleads_v3_enums_travel_placeholder_field_pb=require("../../../../../google/ads/googleads/v3/enums/travel_placeholder_field_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.AttributeFieldMapping",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.resources.FeedMapping",null,global),proto.google.ads.googleads.v3.resources.FeedMapping=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v3.resources.FeedMapping.repeatedFields_,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.resources.FeedMapping,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.FeedMapping.displayName="proto.google.ads.googleads.v3.resources.FeedMapping"),proto.google.ads.googleads.v3.resources.FeedMapping.repeatedFields_=[5],proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_=[[3,4]],proto.google.ads.googleads.v3.resources.FeedMapping.TargetCase={TARGET_NOT_SET:0,PLACEHOLDER_TYPE:3,CRITERION_TYPE:4},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getTargetCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.FeedMapping.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.FeedMapping.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.FeedMapping.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),feed:(f=msg.getFeed())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),attributeFieldMappingsList:jspb.Message.toObjectList(msg.getAttributeFieldMappingsList(),proto.google.ads.googleads.v3.resources.AttributeFieldMapping.toObject,includeInstance),status:jspb.Message.getFieldWithDefault(msg,6,0),placeholderType:jspb.Message.getFieldWithDefault(msg,3,0),criterionType:jspb.Message.getFieldWithDefault(msg,4,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.FeedMapping.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.FeedMapping;return proto.google.ads.googleads.v3.resources.FeedMapping.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.FeedMapping.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setFeed(value);break;case 5:value=new proto.google.ads.googleads.v3.resources.AttributeFieldMapping,reader.readMessage(value,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.deserializeBinaryFromReader),msg.addAttributeFieldMappings(value);break;case 6:value=reader.readEnum(),msg.setStatus(value);break;case 3:value=reader.readEnum(),msg.setPlaceholderType(value);break;case 4:value=reader.readEnum(),msg.setCriterionType(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.FeedMapping.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.FeedMapping.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getFeed())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getAttributeFieldMappingsList()).length&&writer.writeRepeatedMessage(5,f,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(6,f),null!=(f=jspb.Message.getField(message,3))&&writer.writeEnum(3,f),null!=(f=jspb.Message.getField(message,4))&&writer.writeEnum(4,f)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getFeed=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setFeed=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.clearFeed=function(){this.setFeed(void 0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.hasFeed=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getAttributeFieldMappingsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v3.resources.AttributeFieldMapping,5)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setAttributeFieldMappingsList=function(value){jspb.Message.setRepeatedWrapperField(this,5,value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.addAttributeFieldMappings=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,5,opt_value,proto.google.ads.googleads.v3.resources.AttributeFieldMapping,opt_index)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.clearAttributeFieldMappingsList=function(){this.setAttributeFieldMappingsList([])},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getPlaceholderType=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setPlaceholderType=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.clearPlaceholderType=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.hasPlaceholderType=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.getCriterionType=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.setCriterionType=function(value){jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.clearCriterionType=function(){jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v3.resources.FeedMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.FeedMapping.prototype.hasCriterionType=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v3.resources.AttributeFieldMapping,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.AttributeFieldMapping.displayName="proto.google.ads.googleads.v3.resources.AttributeFieldMapping"),proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_=[[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]],proto.google.ads.googleads.v3.resources.AttributeFieldMapping.FieldCase={FIELD_NOT_SET:0,SITELINK_FIELD:3,CALL_FIELD:4,APP_FIELD:5,LOCATION_FIELD:6,AFFILIATE_LOCATION_FIELD:7,CALLOUT_FIELD:8,STRUCTURED_SNIPPET_FIELD:9,MESSAGE_FIELD:10,PRICE_FIELD:11,PROMOTION_FIELD:12,AD_CUSTOMIZER_FIELD:13,DSA_PAGE_FEED_FIELD:14,LOCATION_EXTENSION_TARGETING_FIELD:15,EDUCATION_FIELD:16,FLIGHT_FIELD:17,CUSTOM_FIELD:18,HOTEL_FIELD:19,REAL_ESTATE_FIELD:20,TRAVEL_FIELD:21,LOCAL_FIELD:22,JOB_FIELD:23},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getFieldCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.AttributeFieldMapping.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.toObject=function(includeInstance,msg){var f,obj={feedAttributeId:(f=msg.getFeedAttributeId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),fieldId:(f=msg.getFieldId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),sitelinkField:jspb.Message.getFieldWithDefault(msg,3,0),callField:jspb.Message.getFieldWithDefault(msg,4,0),appField:jspb.Message.getFieldWithDefault(msg,5,0),locationField:jspb.Message.getFieldWithDefault(msg,6,0),affiliateLocationField:jspb.Message.getFieldWithDefault(msg,7,0),calloutField:jspb.Message.getFieldWithDefault(msg,8,0),structuredSnippetField:jspb.Message.getFieldWithDefault(msg,9,0),messageField:jspb.Message.getFieldWithDefault(msg,10,0),priceField:jspb.Message.getFieldWithDefault(msg,11,0),promotionField:jspb.Message.getFieldWithDefault(msg,12,0),adCustomizerField:jspb.Message.getFieldWithDefault(msg,13,0),dsaPageFeedField:jspb.Message.getFieldWithDefault(msg,14,0),locationExtensionTargetingField:jspb.Message.getFieldWithDefault(msg,15,0),educationField:jspb.Message.getFieldWithDefault(msg,16,0),flightField:jspb.Message.getFieldWithDefault(msg,17,0),customField:jspb.Message.getFieldWithDefault(msg,18,0),hotelField:jspb.Message.getFieldWithDefault(msg,19,0),realEstateField:jspb.Message.getFieldWithDefault(msg,20,0),travelField:jspb.Message.getFieldWithDefault(msg,21,0),localField:jspb.Message.getFieldWithDefault(msg,22,0),jobField:jspb.Message.getFieldWithDefault(msg,23,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.AttributeFieldMapping.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.AttributeFieldMapping;return proto.google.ads.googleads.v3.resources.AttributeFieldMapping.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setFeedAttributeId(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setFieldId(value);break;case 3:value=reader.readEnum(),msg.setSitelinkField(value);break;case 4:value=reader.readEnum(),msg.setCallField(value);break;case 5:value=reader.readEnum(),msg.setAppField(value);break;case 6:value=reader.readEnum(),msg.setLocationField(value);break;case 7:value=reader.readEnum(),msg.setAffiliateLocationField(value);break;case 8:value=reader.readEnum(),msg.setCalloutField(value);break;case 9:value=reader.readEnum(),msg.setStructuredSnippetField(value);break;case 10:value=reader.readEnum(),msg.setMessageField(value);break;case 11:value=reader.readEnum(),msg.setPriceField(value);break;case 12:value=reader.readEnum(),msg.setPromotionField(value);break;case 13:value=reader.readEnum(),msg.setAdCustomizerField(value);break;case 14:value=reader.readEnum(),msg.setDsaPageFeedField(value);break;case 15:value=reader.readEnum(),msg.setLocationExtensionTargetingField(value);break;case 16:value=reader.readEnum(),msg.setEducationField(value);break;case 17:value=reader.readEnum(),msg.setFlightField(value);break;case 18:value=reader.readEnum(),msg.setCustomField(value);break;case 19:value=reader.readEnum(),msg.setHotelField(value);break;case 20:value=reader.readEnum(),msg.setRealEstateField(value);break;case 21:value=reader.readEnum(),msg.setTravelField(value);break;case 22:value=reader.readEnum(),msg.setLocalField(value);break;case 23:value=reader.readEnum(),msg.setJobField(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.AttributeFieldMapping.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getFeedAttributeId())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getFieldId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeEnum(3,f),null!=(f=jspb.Message.getField(message,4))&&writer.writeEnum(4,f),null!=(f=jspb.Message.getField(message,5))&&writer.writeEnum(5,f),null!=(f=jspb.Message.getField(message,6))&&writer.writeEnum(6,f),null!=(f=jspb.Message.getField(message,7))&&writer.writeEnum(7,f),null!=(f=jspb.Message.getField(message,8))&&writer.writeEnum(8,f),null!=(f=jspb.Message.getField(message,9))&&writer.writeEnum(9,f),null!=(f=jspb.Message.getField(message,10))&&writer.writeEnum(10,f),null!=(f=jspb.Message.getField(message,11))&&writer.writeEnum(11,f),null!=(f=jspb.Message.getField(message,12))&&writer.writeEnum(12,f),null!=(f=jspb.Message.getField(message,13))&&writer.writeEnum(13,f),null!=(f=jspb.Message.getField(message,14))&&writer.writeEnum(14,f),null!=(f=jspb.Message.getField(message,15))&&writer.writeEnum(15,f),null!=(f=jspb.Message.getField(message,16))&&writer.writeEnum(16,f),null!=(f=jspb.Message.getField(message,17))&&writer.writeEnum(17,f),null!=(f=jspb.Message.getField(message,18))&&writer.writeEnum(18,f),null!=(f=jspb.Message.getField(message,19))&&writer.writeEnum(19,f),null!=(f=jspb.Message.getField(message,20))&&writer.writeEnum(20,f),null!=(f=jspb.Message.getField(message,21))&&writer.writeEnum(21,f),null!=(f=jspb.Message.getField(message,22))&&writer.writeEnum(22,f),null!=(f=jspb.Message.getField(message,23))&&writer.writeEnum(23,f)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getFeedAttributeId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,1)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setFeedAttributeId=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearFeedAttributeId=function(){this.setFeedAttributeId(void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasFeedAttributeId=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getFieldId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setFieldId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearFieldId=function(){this.setFieldId(void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasFieldId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getSitelinkField=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setSitelinkField=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearSitelinkField=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasSitelinkField=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getCallField=function(){return jspb.Message.getFieldWithDefault(this,4,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setCallField=function(value){jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearCallField=function(){jspb.Message.setOneofField(this,4,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasCallField=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getAppField=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setAppField=function(value){jspb.Message.setOneofField(this,5,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearAppField=function(){jspb.Message.setOneofField(this,5,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasAppField=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getLocationField=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setLocationField=function(value){jspb.Message.setOneofField(this,6,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearLocationField=function(){jspb.Message.setOneofField(this,6,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasLocationField=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getAffiliateLocationField=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setAffiliateLocationField=function(value){jspb.Message.setOneofField(this,7,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearAffiliateLocationField=function(){jspb.Message.setOneofField(this,7,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasAffiliateLocationField=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getCalloutField=function(){return jspb.Message.getFieldWithDefault(this,8,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setCalloutField=function(value){jspb.Message.setOneofField(this,8,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearCalloutField=function(){jspb.Message.setOneofField(this,8,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasCalloutField=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getStructuredSnippetField=function(){return jspb.Message.getFieldWithDefault(this,9,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setStructuredSnippetField=function(value){jspb.Message.setOneofField(this,9,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearStructuredSnippetField=function(){jspb.Message.setOneofField(this,9,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasStructuredSnippetField=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getMessageField=function(){return jspb.Message.getFieldWithDefault(this,10,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setMessageField=function(value){jspb.Message.setOneofField(this,10,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearMessageField=function(){jspb.Message.setOneofField(this,10,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasMessageField=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getPriceField=function(){return jspb.Message.getFieldWithDefault(this,11,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setPriceField=function(value){jspb.Message.setOneofField(this,11,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearPriceField=function(){jspb.Message.setOneofField(this,11,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasPriceField=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getPromotionField=function(){return jspb.Message.getFieldWithDefault(this,12,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setPromotionField=function(value){jspb.Message.setOneofField(this,12,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearPromotionField=function(){jspb.Message.setOneofField(this,12,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasPromotionField=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getAdCustomizerField=function(){return jspb.Message.getFieldWithDefault(this,13,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setAdCustomizerField=function(value){jspb.Message.setOneofField(this,13,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearAdCustomizerField=function(){jspb.Message.setOneofField(this,13,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasAdCustomizerField=function(){return null!=jspb.Message.getField(this,13)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getDsaPageFeedField=function(){return jspb.Message.getFieldWithDefault(this,14,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setDsaPageFeedField=function(value){jspb.Message.setOneofField(this,14,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearDsaPageFeedField=function(){jspb.Message.setOneofField(this,14,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasDsaPageFeedField=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getLocationExtensionTargetingField=function(){return jspb.Message.getFieldWithDefault(this,15,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setLocationExtensionTargetingField=function(value){jspb.Message.setOneofField(this,15,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearLocationExtensionTargetingField=function(){jspb.Message.setOneofField(this,15,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasLocationExtensionTargetingField=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getEducationField=function(){return jspb.Message.getFieldWithDefault(this,16,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setEducationField=function(value){jspb.Message.setOneofField(this,16,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearEducationField=function(){jspb.Message.setOneofField(this,16,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasEducationField=function(){return null!=jspb.Message.getField(this,16)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getFlightField=function(){return jspb.Message.getFieldWithDefault(this,17,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setFlightField=function(value){jspb.Message.setOneofField(this,17,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearFlightField=function(){jspb.Message.setOneofField(this,17,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasFlightField=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getCustomField=function(){return jspb.Message.getFieldWithDefault(this,18,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setCustomField=function(value){jspb.Message.setOneofField(this,18,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearCustomField=function(){jspb.Message.setOneofField(this,18,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasCustomField=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getHotelField=function(){return jspb.Message.getFieldWithDefault(this,19,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setHotelField=function(value){jspb.Message.setOneofField(this,19,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearHotelField=function(){jspb.Message.setOneofField(this,19,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasHotelField=function(){return null!=jspb.Message.getField(this,19)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getRealEstateField=function(){return jspb.Message.getFieldWithDefault(this,20,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setRealEstateField=function(value){jspb.Message.setOneofField(this,20,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearRealEstateField=function(){jspb.Message.setOneofField(this,20,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasRealEstateField=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getTravelField=function(){return jspb.Message.getFieldWithDefault(this,21,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setTravelField=function(value){jspb.Message.setOneofField(this,21,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearTravelField=function(){jspb.Message.setOneofField(this,21,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasTravelField=function(){return null!=jspb.Message.getField(this,21)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getLocalField=function(){return jspb.Message.getFieldWithDefault(this,22,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setLocalField=function(value){jspb.Message.setOneofField(this,22,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearLocalField=function(){jspb.Message.setOneofField(this,22,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasLocalField=function(){return null!=jspb.Message.getField(this,22)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.getJobField=function(){return jspb.Message.getFieldWithDefault(this,23,0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.setJobField=function(value){jspb.Message.setOneofField(this,23,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],value)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.clearJobField=function(){jspb.Message.setOneofField(this,23,proto.google.ads.googleads.v3.resources.AttributeFieldMapping.oneofGroups_[0],void 0)},proto.google.ads.googleads.v3.resources.AttributeFieldMapping.prototype.hasJobField=function(){return null!=jspb.Message.getField(this,23)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);