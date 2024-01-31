"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38094],{187384:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-00992540","path":"/devices/MLI-404011_MLI-404049.html","title":"Müller Licht MLI-404011/MLI-404049 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Müller Licht MLI-404011/MLI-404049 control via MQTT","description":"Integrate your Müller Licht MLI-404011/MLI-404049 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Groups binding","slug":"groups-binding","link":"#groups-binding","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706729469000},"filePathRelative":"devices/MLI-404011_MLI-404049.md"}')},281144:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(166252);const n=(0,o._)("h1",{id:"muller-licht-mli-404011-mli-404049",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#muller-licht-mli-404011-mli-404049","aria-hidden":"true"},"#"),(0,o.Uk)(" Müller Licht MLI-404011/MLI-404049")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"MLI-404011/MLI-404049")],-1),r=(0,o._)("td",null,"Vendor",-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Tint remote control")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"action, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MLI-404011-MLI-404049.jpg",alt:"Müller Licht MLI-404011/MLI-404049"})])],-1),c=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id="groups-binding" tabindex="-1"><a class="header-anchor" href="#groups-binding" aria-hidden="true">#</a> Groups binding</h3><p>This remote is able to deal with 4 ZigBee groups:</p><ul><li>group0 = All three leds lit (no support for <code>on</code>/<code>off</code> actions and scene activation)</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul>',6),h=(0,o._)("strong",null,"consecutive group ids",-1),g=(0,o._)("code",null,"genLevelCtrl",-1),p=(0,o._)("code",null,"lightingColorCtrl",-1),b=(0,o._)("p",null,"It is possible to bind to a device instead of a group. The device will be bound to group0. In this case, group0 to group3 will not be usable.",-1),m=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),_=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),v={},f=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[l,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=M%C3%BCller%20Licht"},{default:(0,o.w5)((()=>[(0,o.Uk)("Müller Licht")])),_:1})])]),a,s,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,o._)("p",null,[(0,o.Uk)("You can direct bind each remote group with a different Zigbee group, however there is a caveat: the four Zigbee groups have to use "),h,(0,o.Uk)(". When setting up the binding you will only need to bind group0 to the remote (using the frontend or "),(0,o.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("MQTT command")])),_:1}),(0,o.Uk)("). The 3 consecutive groups will be bound to group1 to group3 automagically. Only the binding for group0 will be listed for the device within Zigbee2MQTT ("),g,(0,o.Uk)(" and "),p,(0,o.Uk)(" clusters).")]),(0,o._)("p",null,[(0,o.Uk)("This means that you probably should carefully "),(0,o.Wm)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigadd_group"},{default:(0,o.w5)((()=>[(0,o.Uk)("define your groups id")])),_:1}),(0,o.Uk)(" when creating them. When creating the binding you need to wake up the device. The most reliable way is to pull the battery, press any button to drain remaining power and insert it back right when sending the binding request to the remote. You do not need to bother with the default tint action groups (16388/16389/16390), they will be overwritten as soon as the binding was successful.")]),b,(0,o.kq)(" Notes END: Do not edit below this line "),m,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),_])}]])}}]);