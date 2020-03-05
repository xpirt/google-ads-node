var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_enums_placement_type_pb=require("../../../../../google/ads/googleads/v3/enums/placement_type_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.resources.GroupPlacementView",null,global),proto.google.ads.googleads.v3.resources.GroupPlacementView=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.resources.GroupPlacementView,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.resources.GroupPlacementView.displayName="proto.google.ads.googleads.v3.resources.GroupPlacementView"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.resources.GroupPlacementView.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.resources.GroupPlacementView.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),placement:(f=msg.getPlacement())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),displayName:(f=msg.getDisplayName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),targetUrl:(f=msg.getTargetUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),placementType:jspb.Message.getFieldWithDefault(msg,5,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.resources.GroupPlacementView.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.resources.GroupPlacementView;return proto.google.ads.googleads.v3.resources.GroupPlacementView.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.resources.GroupPlacementView.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPlacement(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setDisplayName(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setTargetUrl(value);break;case 5:value=reader.readEnum(),msg.setPlacementType(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.resources.GroupPlacementView.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.resources.GroupPlacementView.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getPlacement())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getDisplayName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getTargetUrl())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getPlacementType())&&writer.writeEnum(5,f)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.getPlacement=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.setPlacement=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.clearPlacement=function(){this.setPlacement(void 0)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.hasPlacement=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.getDisplayName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.setDisplayName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.clearDisplayName=function(){this.setDisplayName(void 0)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.hasDisplayName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.getTargetUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.setTargetUrl=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.clearTargetUrl=function(){this.setTargetUrl(void 0)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.hasTargetUrl=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.getPlacementType=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v3.resources.GroupPlacementView.prototype.setPlacementType=function(value){jspb.Message.setProto3EnumField(this,5,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.resources);