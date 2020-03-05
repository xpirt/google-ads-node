var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView",null,global),proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.displayName="proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),searchTerm:(f=msg.getSearchTerm())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),headline:(f=msg.getHeadline())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),landingPage:(f=msg.getLandingPage())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),pageUrl:(f=msg.getPageUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),hasNegativeKeyword:(f=msg.getHasNegativeKeyword())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),hasMatchingKeyword:(f=msg.getHasMatchingKeyword())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),hasNegativeUrl:(f=msg.getHasNegativeUrl())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView;return proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setSearchTerm(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setHeadline(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLandingPage(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPageUrl(value);break;case 6:value=new google_protobuf_wrappers_pb.BoolValue,reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setHasNegativeKeyword(value);break;case 7:value=new google_protobuf_wrappers_pb.BoolValue,reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setHasMatchingKeyword(value);break;case 8:value=new google_protobuf_wrappers_pb.BoolValue,reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setHasNegativeUrl(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getSearchTerm())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getHeadline())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLandingPage())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPageUrl())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getHasNegativeKeyword())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getHasMatchingKeyword())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getHasNegativeUrl())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getSearchTerm=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setSearchTerm=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearSearchTerm=function(){this.setSearchTerm(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasSearchTerm=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getHeadline=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setHeadline=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearHeadline=function(){this.setHeadline(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasHeadline=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getLandingPage=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setLandingPage=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearLandingPage=function(){this.setLandingPage(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasLandingPage=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getPageUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setPageUrl=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearPageUrl=function(){this.setPageUrl(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasPageUrl=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getHasNegativeKeyword=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,6)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setHasNegativeKeyword=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearHasNegativeKeyword=function(){this.setHasNegativeKeyword(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasHasNegativeKeyword=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getHasMatchingKeyword=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,7)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setHasMatchingKeyword=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearHasMatchingKeyword=function(){this.setHasMatchingKeyword(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasHasMatchingKeyword=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.getHasNegativeUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,8)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.setHasNegativeUrl=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.clearHasNegativeUrl=function(){this.setHasNegativeUrl(void 0)},proto.google.ads.googleads.v3.resources.DynamicSearchAdsSearchTermView.prototype.hasHasNegativeUrl=function(){return null!=jspb.Message.getField(this,8)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);