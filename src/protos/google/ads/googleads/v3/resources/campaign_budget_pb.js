var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_budget_delivery_method_pb=require("../../../../../google/ads/googleads/v3/enums/budget_delivery_method_pb.js"),google_ads_googleads_v3_enums_budget_period_pb=require("../../../../../google/ads/googleads/v3/enums/budget_period_pb.js"),google_ads_googleads_v3_enums_budget_status_pb=require("../../../../../google/ads/googleads/v3/enums/budget_status_pb.js"),google_ads_googleads_v3_enums_budget_type_pb=require("../../../../../google/ads/googleads/v3/enums/budget_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.CampaignBudget",null,global),proto.google.ads.googleads.v3.resources.CampaignBudget=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.CampaignBudget,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.CampaignBudget.displayName="proto.google.ads.googleads.v3.resources.CampaignBudget"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.CampaignBudget.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.CampaignBudget.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),amountMicros:(f=msg.getAmountMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),totalAmountMicros:(f=msg.getTotalAmountMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,6,0),deliveryMethod:jspb.Message.getFieldWithDefault(msg,7,0),explicitlyShared:(f=msg.getExplicitlyShared())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),referenceCount:(f=msg.getReferenceCount())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),hasRecommendedBudget:(f=msg.getHasRecommendedBudget())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),recommendedBudgetAmountMicros:(f=msg.getRecommendedBudgetAmountMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),period:jspb.Message.getFieldWithDefault(msg,13,0),recommendedBudgetEstimatedChangeWeeklyClicks:(f=msg.getRecommendedBudgetEstimatedChangeWeeklyClicks())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),recommendedBudgetEstimatedChangeWeeklyCostMicros:(f=msg.getRecommendedBudgetEstimatedChangeWeeklyCostMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),recommendedBudgetEstimatedChangeWeeklyInteractions:(f=msg.getRecommendedBudgetEstimatedChangeWeeklyInteractions())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),recommendedBudgetEstimatedChangeWeeklyViews:(f=msg.getRecommendedBudgetEstimatedChangeWeeklyViews())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,18,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.CampaignBudget.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.CampaignBudget;return proto.google.ads.googleads.v3.resources.CampaignBudget.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.CampaignBudget.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setAmountMicros(value);break;case 10:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setTotalAmountMicros(value);break;case 6:value=reader.readEnum(),msg.setStatus(value);break;case 7:value=reader.readEnum(),msg.setDeliveryMethod(value);break;case 8:value=new google_protobuf_wrappers_pb.BoolValue,reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setExplicitlyShared(value);break;case 9:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setReferenceCount(value);break;case 11:value=new google_protobuf_wrappers_pb.BoolValue,reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setHasRecommendedBudget(value);break;case 12:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedBudgetAmountMicros(value);break;case 13:value=reader.readEnum(),msg.setPeriod(value);break;case 14:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedBudgetEstimatedChangeWeeklyClicks(value);break;case 15:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedBudgetEstimatedChangeWeeklyCostMicros(value);break;case 16:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedBudgetEstimatedChangeWeeklyInteractions(value);break;case 17:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setRecommendedBudgetEstimatedChangeWeeklyViews(value);break;case 18:value=reader.readEnum(),msg.setType(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.CampaignBudget.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.CampaignBudget.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getAmountMicros())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getTotalAmountMicros())&&writer.writeMessage(10,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(6,f),0!==(f=message.getDeliveryMethod())&&writer.writeEnum(7,f),null!=(f=message.getExplicitlyShared())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getReferenceCount())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getHasRecommendedBudget())&&writer.writeMessage(11,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getRecommendedBudgetAmountMicros())&&writer.writeMessage(12,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getPeriod())&&writer.writeEnum(13,f),null!=(f=message.getRecommendedBudgetEstimatedChangeWeeklyClicks())&&writer.writeMessage(14,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getRecommendedBudgetEstimatedChangeWeeklyCostMicros())&&writer.writeMessage(15,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getRecommendedBudgetEstimatedChangeWeeklyInteractions())&&writer.writeMessage(16,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getRecommendedBudgetEstimatedChangeWeeklyViews())&&writer.writeMessage(17,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(18,f)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getAmountMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setAmountMicros=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearAmountMicros=function(){this.setAmountMicros(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasAmountMicros=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getTotalAmountMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,10)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setTotalAmountMicros=function(value){jspb.Message.setWrapperField(this,10,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearTotalAmountMicros=function(){this.setTotalAmountMicros(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasTotalAmountMicros=function(){return null!=jspb.Message.getField(this,10)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getDeliveryMethod=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setDeliveryMethod=function(value){jspb.Message.setProto3EnumField(this,7,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getExplicitlyShared=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setExplicitlyShared=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearExplicitlyShared=function(){this.setExplicitlyShared(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasExplicitlyShared=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getReferenceCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,9)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setReferenceCount=function(value){jspb.Message.setWrapperField(this,9,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearReferenceCount=function(){this.setReferenceCount(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasReferenceCount=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getHasRecommendedBudget=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,11)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setHasRecommendedBudget=function(value){jspb.Message.setWrapperField(this,11,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearHasRecommendedBudget=function(){this.setHasRecommendedBudget(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasHasRecommendedBudget=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getRecommendedBudgetAmountMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,12)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setRecommendedBudgetAmountMicros=function(value){jspb.Message.setWrapperField(this,12,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearRecommendedBudgetAmountMicros=function(){this.setRecommendedBudgetAmountMicros(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasRecommendedBudgetAmountMicros=function(){return null!=jspb.Message.getField(this,12)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getPeriod=function(){return jspb.Message.getFieldWithDefault(this,13,0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setPeriod=function(value){jspb.Message.setProto3EnumField(this,13,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyClicks=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,14)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyClicks=function(value){jspb.Message.setWrapperField(this,14,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyClicks=function(){this.setRecommendedBudgetEstimatedChangeWeeklyClicks(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyClicks=function(){return null!=jspb.Message.getField(this,14)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyCostMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,15)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyCostMicros=function(value){jspb.Message.setWrapperField(this,15,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyCostMicros=function(){this.setRecommendedBudgetEstimatedChangeWeeklyCostMicros(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyCostMicros=function(){return null!=jspb.Message.getField(this,15)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyInteractions=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,16)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyInteractions=function(value){jspb.Message.setWrapperField(this,16,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyInteractions=function(){this.setRecommendedBudgetEstimatedChangeWeeklyInteractions(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyInteractions=function(){return null!=jspb.Message.getField(this,16)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getRecommendedBudgetEstimatedChangeWeeklyViews=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,17)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setRecommendedBudgetEstimatedChangeWeeklyViews=function(value){jspb.Message.setWrapperField(this,17,value)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.clearRecommendedBudgetEstimatedChangeWeeklyViews=function(){this.setRecommendedBudgetEstimatedChangeWeeklyViews(void 0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.hasRecommendedBudgetEstimatedChangeWeeklyViews=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,18,0)},proto.google.ads.googleads.v3.resources.CampaignBudget.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,18,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);