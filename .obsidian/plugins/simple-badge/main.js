/* Simple Badge — generated from src/main.ts.

entities 8.1.0 (https://github.com/fb55/entities)
License: BSD-2-Clause

Copyright (c) Felix Böhm
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SimpleBadgePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/i18n.ts
var en = {
  appearance: "Appearance",
  badgeFontSize: "Badge font size ratio",
  badgeFontSizeDescription: "Scale all badges relative to the surrounding text, including presets, previews, and badges already in notes. Default: 72%.",
  badgeFontSizeInput: "Badge font size percentage",
  resetFontSize: "Reset to 72%",
  invalidFontSize: "Enter a whole percentage from 50 to 150.",
  fontSizeSaved: "Font size ratio saved.",
  fontSizeSaveFailed: "Could not save the font size ratio. Restored the last saved value. Please try again.",
  badgeCornerRoundness: "Badge corner roundness",
  badgeCornerRoundnessDescription: "Shape all badges, including those already in notes. Custom: 0% square, 100% pill; scales with badge text. Default keeps the original 4px corners.",
  badgeCornerRoundnessInput: "Badge corner roundness percentage",
  cornerMode: "Badge corner mode",
  originalCorners: "Original (4px)",
  customCorners: "Custom",
  resetCornerRoundness: "Restore original 4px corners",
  invalidCornerRoundness: "Enter a whole percentage from 0 to 100.",
  cornerRoundnessSaved: "Corner roundness saved.",
  cornerRoundnessSaveFailed: "Could not save corner roundness. Restored the last saved value. Please try again.",
  insertBadge: "Insert Badge",
  presetBadges: "Preset badges",
  createBadge: "Create a badge",
  insertionOrder: "Insertion order",
  chooseNewPosition: "Choose a new position",
  cancel: "Cancel",
  insertSelected: "Insert selected badges",
  addToSelection: "Add to selection",
  addedAndSaved: "Added to selection and saved as a preset.",
  added: "Added to the current selection.",
  emptyPresetsForInsert: "No presets yet. Create and save a badge on the right.",
  selectBadge: (color, text) => `Select ${color} badge: ${text}`,
  deselectBadge: (color, text, order) => `Deselect ${color} badge: ${text}, number ${order}`,
  selectionCount: (count) => `${count} selected`,
  noSelection: "Nothing selected",
  removeSelected: (order, text) => `Remove badge ${order}: ${text}`,
  temporary: "Temporary",
  text: "Text",
  placeholder: "e.g. To do",
  color: "Color",
  badgeColor: "Badge color",
  themeColors: "Theme colors",
  customColor: "Custom",
  pickColor: "Pick a custom color",
  hexColor: "HEX color",
  themeColorHint: "Theme colors adapt to your Obsidian theme.",
  customColorHint: "Enter #RRGGBB or #RGB. Custom colors stay the same across themes.",
  invalidHexColor: "Enter a valid HEX color, such as #e67e22 or #abc.",
  preview: "Preview",
  saveAsPreset: "Also save as preset",
  saving: "Saving\u2026",
  addAndSave: "Add to selection and save preset",
  saveFailed: "Could not save. Please try again.",
  editPreset: "Edit preset badge",
  newPreset: "New preset badge",
  savePreset: "Save preset",
  presetDescription: "Manage the presets shown in the insertion dialog. This list controls display order; badges are inserted in the order you select them.",
  addPreset: "Add preset",
  importPresets: "Add presets from span code",
  importDescription: "Paste badges from another vault to add them as presets.",
  spanCode: "Span code",
  importPlaceholder: '<span class="badge badge-red">Important</span>\n<span class="badge badge-custom" style="--simple-badge-color: #e67e22;">Review</span>',
  importHint: "Paste one or more complete Simple Badge spans, separated by spaces or newlines. Theme colors and custom HEX colors are supported. Existing presets stay in place; duplicates are skipped.",
  importAction: "Add presets",
  importSummary: (added, skipped) => `${added} to add \xB7 ${skipped} duplicates to skip`,
  importSuccess: (added, skipped) => `Added ${added} presets. Skipped ${skipped} duplicates.`,
  importRequired: "Paste at least one complete badge span.",
  importSyntax: "Use complete span elements containing plain text. Escape < in badge text as &lt;, and remove other markup or surrounding prose.",
  importAttributes: "Only class and style attributes are supported, with each attribute appearing once.",
  importClasses: "Use the badge class with exactly one supported badge color class (for example, badge-red or badge-custom).",
  importCustomStyle: 'Custom badges require style="--simple-badge-color: #RRGGBB;" (or #RGB), with no other style declarations.',
  importThemeStyle: "Theme badges use their color class without inline style declarations.",
  importItemError: (index, message) => `Badge ${index}: ${message}`,
  importTooLarge: "Paste at most 200,000 characters at a time.",
  importTooMany: (limit) => `Import at most ${limit} badges at a time.`,
  emptyPresetsForSettings: 'No presets yet. Click "Add preset" to create your first badge.',
  moveUp: (text) => `Move up: ${text}`,
  moveDown: (text) => `Move down: ${text}`,
  edit: "Edit",
  editNamed: (text) => `Edit ${text}`,
  delete: "Delete",
  deleteNamed: (text) => `Delete ${text}`,
  orderSaved: "Display order saved.",
  presetDeleted: "Preset deleted. Badges already in notes are unchanged.",
  requiredText: "Enter badge text.",
  singleLine: "Badge text must be a single line.",
  invalidColor: "Choose a valid badge color.",
  unsupportedConfig: "The preset configuration format or version is not supported. Check data.json, then re-enable the plugin.",
  invalidId: "The preset configuration contains an invalid ID.",
  duplicateConfig: "The preset configuration contains duplicate badges or IDs.",
  duplicatePreset: "A preset with the same text and color already exists. Change it before saving.",
  missingPreset: "This preset no longer exists. Reopen the preset editor.",
  configNotLoaded: "Presets have not loaded successfully. Saving is unavailable.",
  loadFailed: "Could not load presets. Check data.json, then re-enable the plugin.",
  pluginDisabled: "The plugin is disabled. Re-enable it before saving.",
  positionChanged: 'The note or editing position has changed. Click "Choose a new position", then right-click at a new position to reopen the dialog. Your selection will be preserved.',
  selectionPreserved: 'Your selection has been preserved. Right-click at a new position and choose "Insert Badge".',
  colors: { red: "Red", orange: "Orange", yellow: "Yellow", green: "Green", cyan: "Cyan", blue: "Blue", purple: "Purple", pink: "Pink" },
  defaults: { blue: "Information", green: "Done", purple: "Note", red: "Important" }
};
var zh = {
  appearance: "\u5916\u89C2",
  badgeFontSize: "Badge \u5B57\u53F7\u6BD4\u4F8B",
  badgeFontSizeDescription: "\u76F8\u5BF9\u4E8E\u5468\u56F4\u6587\u5B57\u7F29\u653E\u6240\u6709 Badge\uFF0C\u5305\u62EC\u9884\u8BBE\u3001\u5404\u5904\u9884\u89C8\u548C\u7B14\u8BB0\u4E2D\u5DF2\u6709\u7684 Badge\u3002\u9ED8\u8BA4\uFF1A72%\u3002",
  badgeFontSizeInput: "Badge \u5B57\u53F7\u767E\u5206\u6BD4",
  resetFontSize: "\u6062\u590D\u4E3A 72%",
  invalidFontSize: "\u8BF7\u8F93\u5165 50 \u5230 150 \u4E4B\u95F4\u7684\u6574\u6570\u767E\u5206\u6BD4\u3002",
  fontSizeSaved: "\u5B57\u53F7\u6BD4\u4F8B\u5DF2\u4FDD\u5B58\u3002",
  fontSizeSaveFailed: "\u5B57\u53F7\u6BD4\u4F8B\u4FDD\u5B58\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u6700\u8FD1\u6210\u529F\u4FDD\u5B58\u7684\u503C\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  badgeCornerRoundness: "Badge \u5706\u89D2\u7A0B\u5EA6",
  badgeCornerRoundnessDescription: "\u7EDF\u4E00\u8C03\u6574\u6240\u6709 Badge\uFF0C\u5305\u62EC\u7B14\u8BB0\u4E2D\u5DF2\u6709\u7684 Badge\u3002\u81EA\u5B9A\u4E49\uFF1A0% \u4E3A\u76F4\u89D2\uFF0C100% \u4E3A\u80F6\u56CA\u5F62\uFF0C\u968F Badge \u5B57\u53F7\u7F29\u653E\u3002\u9ED8\u8BA4\u4FDD\u7559\u539F\u6709 4px \u5706\u89D2\u3002",
  badgeCornerRoundnessInput: "Badge \u5706\u89D2\u767E\u5206\u6BD4",
  cornerMode: "Badge \u5706\u89D2\u6A21\u5F0F",
  originalCorners: "\u539F\u6709\u5706\u89D2\uFF084px\uFF09",
  customCorners: "\u81EA\u5B9A\u4E49",
  resetCornerRoundness: "\u6062\u590D\u539F\u6709 4px \u5706\u89D2",
  invalidCornerRoundness: "\u8BF7\u8F93\u5165 0 \u5230 100 \u4E4B\u95F4\u7684\u6574\u6570\u767E\u5206\u6BD4\u3002",
  cornerRoundnessSaved: "\u5706\u89D2\u7A0B\u5EA6\u5DF2\u4FDD\u5B58\u3002",
  cornerRoundnessSaveFailed: "\u5706\u89D2\u7A0B\u5EA6\u4FDD\u5B58\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u6700\u8FD1\u6210\u529F\u4FDD\u5B58\u7684\u503C\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  insertBadge: "\u63D2\u5165 Badge",
  presetBadges: "\u9884\u8BBE Badge",
  createBadge: "\u65B0\u5EFA Badge",
  insertionOrder: "\u63D2\u5165\u987A\u5E8F",
  chooseNewPosition: "\u91CD\u65B0\u5B9A\u4F4D",
  cancel: "\u53D6\u6D88",
  insertSelected: "\u63D2\u5165\u9009\u5B9A Badge",
  addToSelection: "\u52A0\u5165\u672C\u6B21\u9009\u62E9",
  addedAndSaved: "\u5DF2\u52A0\u5165\u9009\u62E9\uFF0C\u5E76\u4FDD\u5B58\u4E3A\u9884\u8BBE\u3002",
  added: "\u5DF2\u52A0\u5165\u672C\u6B21\u9009\u62E9\u3002",
  emptyPresetsForInsert: "\u6682\u65E0\u9884\u8BBE\uFF0C\u53EF\u4EE5\u5728\u53F3\u4FA7\u65B0\u5EFA\u5E76\u4FDD\u5B58\u3002",
  selectBadge: (color, text) => `\u9009\u62E9 ${color} ${text}`,
  deselectBadge: (color, text, order) => `\u53D6\u6D88\u9009\u62E9 ${color} ${text}\uFF0C\u7B2C ${order} \u4E2A`,
  selectionCount: (count) => `\u5DF2\u9009 ${count} \u4E2A`,
  noSelection: "\u5C1A\u672A\u9009\u62E9",
  removeSelected: (order, text) => `\u79FB\u9664\u7B2C ${order} \u4E2A Badge\uFF1A${text}`,
  temporary: "\u672C\u6B21",
  text: "\u6587\u5B57",
  placeholder: "\u4F8B\u5982\uFF1A\u5F85\u5904\u7406",
  color: "\u989C\u8272",
  badgeColor: "Badge \u989C\u8272",
  themeColors: "\u4E3B\u9898\u8272",
  customColor: "\u81EA\u5B9A\u4E49",
  pickColor: "\u9009\u62E9\u81EA\u5B9A\u4E49\u989C\u8272",
  hexColor: "HEX \u989C\u8272",
  themeColorHint: "\u4E3B\u9898\u8272\u4F1A\u968F Obsidian \u4E3B\u9898\u81EA\u52A8\u9002\u914D\u3002",
  customColorHint: "\u652F\u6301 #RRGGBB \u6216 #RGB\uFF0C\u5207\u6362\u4E3B\u9898\u65F6\u4FDD\u7559\u6307\u5B9A\u8272\u503C\u3002",
  invalidHexColor: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 HEX \u989C\u8272\uFF0C\u4F8B\u5982 #e67e22 \u6216 #abc\u3002",
  preview: "\u9884\u89C8",
  saveAsPreset: "\u540C\u65F6\u4FDD\u5B58\u4E3A\u9884\u8BBE",
  saving: "\u6B63\u5728\u4FDD\u5B58\u2026",
  addAndSave: "\u52A0\u5165\u9009\u62E9\u5E76\u4FDD\u5B58\u9884\u8BBE",
  saveFailed: "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  editPreset: "\u7F16\u8F91\u9884\u8BBE Badge",
  newPreset: "\u65B0\u589E\u9884\u8BBE Badge",
  savePreset: "\u4FDD\u5B58\u9884\u8BBE",
  presetDescription: "\u7BA1\u7406\u53F3\u952E\u63D2\u5165\u7A97\u53E3\u4E2D\u7684\u9884\u8BBE\u3002\u5217\u8868\u987A\u5E8F\u53EA\u5F71\u54CD\u5C55\u793A\uFF0C\u63D2\u5165\u987A\u5E8F\u4EE5\u70B9\u9009\u987A\u5E8F\u4E3A\u51C6\u3002",
  addPreset: "\u65B0\u589E\u9884\u8BBE",
  importPresets: "\u4ECE span \u4EE3\u7801\u6DFB\u52A0\u9884\u8BBE",
  importDescription: "\u7C98\u8D34\u5176\u4ED6 vault \u4E2D\u7684 Badge \u4EE3\u7801\uFF0C\u5C06\u5176\u6DFB\u52A0\u4E3A\u9884\u8BBE\u3002",
  spanCode: "span \u4EE3\u7801",
  importPlaceholder: '<span class="badge badge-red">\u91CD\u8981</span>\n<span class="badge badge-custom" style="--simple-badge-color: #e67e22;">\u590D\u67E5</span>',
  importHint: "\u7C98\u8D34\u4E00\u4E2A\u6216\u591A\u4E2A\u5B8C\u6574\u7684 Simple Badge span\uFF0C\u4EE5\u7A7A\u683C\u6216\u6362\u884C\u5206\u9694\u3002\u652F\u6301\u4E3B\u9898\u8272\u548C\u81EA\u5B9A\u4E49 HEX \u989C\u8272\uFF1B\u4FDD\u7559\u5DF2\u6709\u9884\u8BBE\uFF0C\u81EA\u52A8\u8DF3\u8FC7\u91CD\u590D\u9879\u3002",
  importAction: "\u6DFB\u52A0\u9884\u8BBE",
  importSummary: (added, skipped) => `\u5C06\u65B0\u589E ${added} \u4E2A \xB7 \u8DF3\u8FC7 ${skipped} \u4E2A\u91CD\u590D\u9879`,
  importSuccess: (added, skipped) => `\u5DF2\u6DFB\u52A0 ${added} \u4E2A\u9884\u8BBE\uFF0C\u8DF3\u8FC7 ${skipped} \u4E2A\u91CD\u590D\u9879\u3002`,
  importRequired: "\u8BF7\u7C98\u8D34\u81F3\u5C11\u4E00\u4E2A\u5B8C\u6574\u7684 Badge span\u3002",
  importSyntax: "\u8BF7\u4F7F\u7528\u5305\u542B\u7EAF\u6587\u5B57\u7684\u5B8C\u6574 span\uFF1B\u6587\u5B57\u4E2D\u7684 < \u5E94\u5199\u4E3A &lt;\uFF0C\u5E76\u79FB\u9664\u5176\u4ED6\u6807\u7B7E\u6216\u5468\u56F4\u7684\u6B63\u6587\u3002",
  importAttributes: "\u4EC5\u652F\u6301 class \u548C style \u5C5E\u6027\uFF0C\u4E14\u6BCF\u4E2A\u5C5E\u6027\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\u3002",
  importClasses: "\u8BF7\u4F7F\u7528 badge \u7C7B\uFF0C\u5E76\u6307\u5B9A\u4E00\u4E2A\u53D7\u652F\u6301\u7684\u989C\u8272\u7C7B\uFF0C\u4F8B\u5982 badge-red \u6216 badge-custom\u3002",
  importCustomStyle: '\u81EA\u5B9A\u4E49 Badge \u9700\u8981 style="--simple-badge-color: #RRGGBB;"\uFF08\u4E5F\u652F\u6301 #RGB\uFF09\uFF0C\u4E0D\u652F\u6301\u5176\u4ED6\u6837\u5F0F\u58F0\u660E\u3002',
  importThemeStyle: "\u4E3B\u9898\u8272 Badge \u4F7F\u7528\u989C\u8272\u7C7B\uFF0C\u4E0D\u652F\u6301\u989D\u5916\u7684\u884C\u5185\u6837\u5F0F\u58F0\u660E\u3002",
  importItemError: (index, message) => `\u7B2C ${index} \u4E2A Badge\uFF1A${message}`,
  importTooLarge: "\u6BCF\u6B21\u6700\u591A\u7C98\u8D34 200,000 \u4E2A\u5B57\u7B26\u3002",
  importTooMany: (limit) => `\u6BCF\u6B21\u6700\u591A\u5BFC\u5165 ${limit} \u4E2A Badge\u3002`,
  emptyPresetsForSettings: "\u6682\u65E0\u9884\u8BBE\uFF0C\u70B9\u51FB\u201C\u65B0\u589E\u9884\u8BBE\u201D\u521B\u5EFA\u7B2C\u4E00\u4E2A Badge\u3002",
  moveUp: (text) => `\u4E0A\u79FB ${text}`,
  moveDown: (text) => `\u4E0B\u79FB ${text}`,
  edit: "\u7F16\u8F91",
  editNamed: (text) => `\u7F16\u8F91 ${text}`,
  delete: "\u5220\u9664",
  deleteNamed: (text) => `\u5220\u9664 ${text}`,
  orderSaved: "\u5C55\u793A\u987A\u5E8F\u5DF2\u4FDD\u5B58\u3002",
  presetDeleted: "\u9884\u8BBE\u5DF2\u5220\u9664\uFF0C\u7B14\u8BB0\u4E2D\u5DF2\u6709\u7684 Badge \u4E0D\u53D7\u5F71\u54CD\u3002",
  requiredText: "\u8BF7\u8F93\u5165 Badge \u6587\u5B57\u3002",
  singleLine: "Badge \u6587\u5B57\u53EA\u80FD\u6709\u4E00\u884C\u3002",
  invalidColor: "\u8BF7\u9009\u62E9\u6709\u6548\u7684 Badge \u989C\u8272\u3002",
  unsupportedConfig: "\u9884\u8BBE\u914D\u7F6E\u683C\u5F0F\u6216\u7248\u672C\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u68C0\u67E5 data.json \u540E\u91CD\u65B0\u542F\u7528\u63D2\u4EF6\u3002",
  invalidId: "\u9884\u8BBE\u914D\u7F6E\u5305\u542B\u65E0\u6548\u7684 ID\u3002",
  duplicateConfig: "\u9884\u8BBE\u914D\u7F6E\u5305\u542B\u91CD\u590D\u7684 Badge \u6216 ID\u3002",
  duplicatePreset: "\u5DF2\u6709\u76F8\u540C\u6587\u5B57\u548C\u989C\u8272\u7684\u9884\u8BBE\uFF0C\u8BF7\u4FEE\u6539\u540E\u518D\u4FDD\u5B58\u3002",
  missingPreset: "\u8BE5\u9884\u8BBE\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u7F16\u8F91\u7A97\u53E3\u3002",
  configNotLoaded: "\u9884\u8BBE\u914D\u7F6E\u5C1A\u672A\u6210\u529F\u52A0\u8F7D\uFF0C\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u3002",
  loadFailed: "\u65E0\u6CD5\u8BFB\u53D6\u9884\u8BBE\u914D\u7F6E\uFF0C\u8BF7\u68C0\u67E5 data.json \u540E\u91CD\u65B0\u542F\u7528\u63D2\u4EF6\u3002",
  pluginDisabled: "\u63D2\u4EF6\u5DF2\u505C\u7528\uFF0C\u8BF7\u91CD\u65B0\u542F\u7528\u540E\u4FDD\u5B58\u3002",
  positionChanged: "\u539F\u6587\u6216\u7F16\u8F91\u4F4D\u7F6E\u5DF2\u53D8\u5316\u3002\u70B9\u51FB\u201C\u91CD\u65B0\u5B9A\u4F4D\u201D\uFF0C\u7136\u540E\u5728\u65B0\u7684\u4F4D\u7F6E\u53F3\u952E\u6253\u5F00\u63D2\u5165\u7A97\u53E3\uFF1B\u672C\u6B21\u9009\u62E9\u4F1A\u4FDD\u7559\u3002",
  selectionPreserved: "\u672C\u6B21\u9009\u62E9\u5DF2\u4FDD\u7559\uFF0C\u8BF7\u5728\u65B0\u7684\u4F4D\u7F6E\u53F3\u952E\u9009\u62E9\u201C\u63D2\u5165 Badge\u201D\u3002",
  colors: { red: "\u7EA2\u8272", orange: "\u6A59\u8272", yellow: "\u9EC4\u8272", green: "\u7EFF\u8272", cyan: "\u9752\u8272", blue: "\u84DD\u8272", purple: "\u7D2B\u8272", pink: "\u7C89\u8272" },
  defaults: { blue: "\u4FE1\u606F", green: "\u5B8C\u6210", purple: "\u5907\u6CE8", red: "\u91CD\u8981" }
};
function getTranslations(language = "en") {
  const locale = language.trim().toLowerCase().replace(/_/g, "-");
  return /^zh(?:-|$)/.test(locale) ? zh : en;
}

// src/model.ts
var BADGE_COLORS = [
  { id: "red" },
  { id: "orange" },
  { id: "yellow" },
  { id: "green" },
  { id: "cyan" },
  { id: "blue" },
  { id: "purple" },
  { id: "pink" }
];
var DEFAULT_BADGE_FONT_SIZE_PERCENT = 72;
var MIN_BADGE_FONT_SIZE_PERCENT = 50;
var MAX_BADGE_FONT_SIZE_PERCENT = 150;
var DEFAULT_CUSTOM_ROUNDNESS_PERCENT = 40;
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function defaultSettings() {
  return { badgeFontSizePercent: DEFAULT_BADGE_FONT_SIZE_PERCENT, badgeCornerRoundnessPercent: null };
}
function validateFontSizePercent(value, strings = getTranslations()) {
  if (typeof value !== "number" || !Number.isInteger(value) || value < MIN_BADGE_FONT_SIZE_PERCENT || value > MAX_BADGE_FONT_SIZE_PERCENT) {
    throw new Error(strings.invalidFontSize);
  }
  return value;
}
function validateCornerRoundness(value, strings = getTranslations()) {
  if (value === null) return null;
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > 100) {
    throw new Error(strings.invalidCornerRoundness);
  }
  return value;
}
function isThemeColor(value) {
  return BADGE_COLORS.some((color) => color.id === value);
}
function normalizeHexColor(value) {
  if (typeof value !== "string") return void 0;
  const hex = value.trim().toLowerCase();
  if (/^#[\da-f]{6}$/.test(hex)) return hex;
  if (/^#[\da-f]{3}$/.test(hex)) return `#${Array.from(hex.slice(1), (digit) => digit + digit).join("")}`;
  return void 0;
}
function normalizeColor(value) {
  return isThemeColor(value) ? value : normalizeHexColor(value);
}
function colorLabel(color, strings) {
  return isThemeColor(color) ? strings.colors[color] : color;
}
function normalizeBadge(value, strings = getTranslations()) {
  if (!isRecord(value) || typeof value.text !== "string" || !value.text.trim()) throw new Error(strings.requiredText);
  if (/[\r\n]/.test(value.text)) throw new Error(strings.singleLine);
  const color = normalizeColor(value.color);
  if (!color) throw new Error(strings.invalidColor);
  return { text: value.text.trim(), color };
}
function sameBadge(a, b) {
  const color = normalizeColor(a.color);
  return a.text === b.text && color !== void 0 && color === normalizeColor(b.color);
}
function planPresetImport(badges, existing) {
  const newBadges = [];
  for (const badge of badges) {
    if (existing.some((preset) => sameBadge(preset, badge)) || newBadges.some((preset) => sameBadge(preset, badge))) continue;
    newBadges.push({ ...badge });
  }
  return { newBadges, skipped: badges.length - newBadges.length };
}
function createId() {
  return Array.from(crypto.getRandomValues(new Uint32Array(4)), (part) => part.toString(16).padStart(8, "0")).join("");
}
function defaultData(strings = getTranslations()) {
  return { schemaVersion: 4, settings: defaultSettings(), presets: [
    { id: "default-blue", color: "blue", text: strings.defaults.blue },
    { id: "default-green", color: "green", text: strings.defaults.green },
    { id: "default-purple", color: "purple", text: strings.defaults.purple },
    { id: "default-red", color: "red", text: strings.defaults.red }
  ] };
}
function decodeData(raw, strings = getTranslations()) {
  if (raw == null) return defaultData(strings);
  if (!isRecord(raw) || ![1, 2, 3, 4].includes(raw.schemaVersion) || !Array.isArray(raw.presets)) {
    throw new Error(strings.unsupportedConfig);
  }
  const settings = defaultSettings();
  if (raw.schemaVersion === 3 || raw.schemaVersion === 4) {
    settings.badgeFontSizePercent = validateFontSizePercent(isRecord(raw.settings) ? raw.settings.badgeFontSizePercent : void 0, strings);
  }
  if (raw.schemaVersion === 4) {
    settings.badgeCornerRoundnessPercent = validateCornerRoundness(isRecord(raw.settings) ? raw.settings.badgeCornerRoundnessPercent : void 0, strings);
  }
  const presets = [];
  const entries = raw.presets;
  for (const entry of entries) {
    if (!isRecord(entry) || typeof entry.id !== "string" || !entry.id.trim()) {
      throw new Error(strings.invalidId);
    }
    const badge = normalizeBadge(entry, strings);
    if (presets.some((preset) => preset.id === entry.id || sameBadge(preset, badge))) {
      throw new Error(strings.duplicateConfig);
    }
    presets.push({ id: entry.id, ...badge });
  }
  return { schemaVersion: 4, presets, settings };
}
var OrderedBadges = class {
  constructor(items = []) {
    this.items = [];
    for (const item of items) this.add(item);
  }
  get values() {
    return this.items.map((item) => ({ ...item }));
  }
  get size() {
    return this.items.length;
  }
  indexOf(id) {
    return this.items.findIndex((item) => item.id === id);
  }
  toggle(item) {
    const index = this.indexOf(item.id);
    if (index < 0) this.add(item);
    else this.items.splice(index, 1);
  }
  add(item) {
    const index = this.items.findIndex((current) => current.id === item.id || sameBadge(current, item));
    if (index < 0) this.items.push({ ...item });
    else this.items[index] = { ...item };
  }
  remove(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
};
function serializeBadges(items) {
  return items.map((item) => {
    const { text, color } = normalizeBadge(item);
    const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (isThemeColor(color)) return `<span class="badge badge-${color}">${escaped}</span>`;
    return `<span class="badge badge-custom" style="--simple-badge-color: ${color};">${escaped}</span>`;
  }).join(" ");
}

// src/badge.ts
function renderBadge(container, badge) {
  const { text, color } = normalizeBadge(badge);
  const span = container.createSpan({ cls: `badge badge-${isThemeColor(color) ? color : "custom"}`, text });
  if (!isThemeColor(color)) span.style.setProperty("--simple-badge-color", color);
  return span;
}
function insertBadges(editor, position, badges) {
  const text = serializeBadges(badges);
  if (!text) return;
  const cursor = { line: position.line, ch: position.ch + text.length };
  editor.transaction({
    changes: [{ from: position, to: position, text }],
    selection: { from: cursor, to: cursor }
  }, "simple-badge");
  editor.focus();
}

// src/insert-modal.ts
var import_obsidian2 = require("obsidian");

// src/color-picker.ts
var import_obsidian = require("obsidian");
var BadgeColorPicker = class {
  constructor(container, strings, initial, onChange, customInput) {
    this.strings = strings;
    this.onChange = onChange;
    this.buttons = /* @__PURE__ */ new Map();
    var _a;
    this.customMode = !isThemeColor(initial);
    this.themeColor = isThemeColor(initial) ? initial : "blue";
    this.customColor = (_a = normalizeHexColor(initial)) != null ? _a : "#e67e22";
    const root = container.createDiv({ cls: "simple-badge-color-picker" });
    const modes = root.createDiv({ cls: "simple-badge-color-modes", attr: { role: "group", "aria-label": strings.badgeColor } });
    this.themeButton = modes.createEl("button", { text: strings.themeColors, attr: { type: "button" } });
    this.customButton = modes.createEl("button", { text: strings.customColor, attr: { type: "button" } });
    this.themeButton.addEventListener("click", () => this.setMode(false));
    this.customButton.addEventListener("click", () => this.setMode(true));
    this.palette = root.createDiv({ cls: "simple-badge-colors", attr: { role: "group", "aria-label": strings.themeColors } });
    for (const { id } of BADGE_COLORS) {
      const button = this.palette.createEl("button", { attr: { type: "button", "aria-label": strings.colors[id] } });
      button.createSpan({ cls: `simple-badge-color-swatch badge-${id}`, attr: { "aria-hidden": "true" } });
      button.createSpan({ text: strings.colors[id] });
      button.createSpan({ cls: "simple-badge-color-check", text: "\u2713", attr: { "aria-hidden": "true" } });
      button.addEventListener("click", () => {
        this.themeColor = id;
        this.refresh();
        this.onChange();
      });
      this.buttons.set(id, button);
    }
    this.customRow = root.createDiv({ cls: "simple-badge-custom-color" });
    const pickerLabel = this.customRow.createEl("label", { cls: "simple-badge-native-color" });
    pickerLabel.createSpan({ text: strings.pickColor, cls: "simple-badge-visually-hidden" });
    this.picker = new import_obsidian.ColorComponent(pickerLabel).setValue(this.customColor);
    const updateFromPicker = () => this.usePickedColor(this.picker.getValue());
    pickerLabel.addEventListener("input", updateFromPicker);
    pickerLabel.addEventListener("change", updateFromPicker);
    const hexLabel = this.customRow.createEl("label", { cls: "simple-badge-hex-field" });
    hexLabel.createSpan({ text: strings.hexColor, cls: "simple-badge-visually-hidden" });
    this.hexInput = hexLabel.createEl("input", { type: "text", placeholder: "#e67e22" });
    this.hexInput.value = this.customMode ? customInput != null ? customInput : this.customColor : this.customColor;
    this.hexInput.autocomplete = "off";
    this.hexInput.spellcheck = false;
    this.hexInput.addEventListener("input", () => {
      const color = normalizeHexColor(this.hexInput.value);
      if (color) {
        this.customColor = color;
        this.picker.setValue(color);
      }
      this.clearError();
      this.onChange();
    });
    this.hexInput.addEventListener("blur", () => {
      const color = normalizeHexColor(this.hexInput.value);
      if (color) this.hexInput.value = color;
      else if (this.customMode) this.showError();
    });
    const hintId = `simple-badge-color-hint-${createId()}`;
    const errorId = `simple-badge-color-error-${createId()}`;
    this.hint = root.createDiv({ cls: "simple-badge-muted", attr: { id: hintId } });
    this.error = root.createDiv({ cls: "simple-badge-color-error", attr: { id: errorId, role: "status", "aria-live": "polite" } });
    this.hexInput.setAttr("aria-describedby", `${hintId} ${errorId}`);
    this.refresh();
  }
  get value() {
    return this.customMode ? this.customColor : this.themeColor;
  }
  get customInput() {
    return this.customMode ? this.hexInput.value : void 0;
  }
  get isValid() {
    return !this.customMode || normalizeHexColor(this.hexInput.value) !== void 0;
  }
  validate() {
    if (this.isValid) return true;
    this.showError();
    this.hexInput.focus();
    return false;
  }
  setMode(custom) {
    this.customMode = custom;
    this.clearError();
    this.refresh();
    this.onChange();
  }
  usePickedColor(value) {
    const color = normalizeHexColor(value);
    if (!color) return;
    this.customColor = color;
    this.hexInput.value = color;
    this.clearError();
    this.onChange();
  }
  refresh() {
    this.themeButton.setAttr("aria-pressed", String(!this.customMode));
    this.customButton.setAttr("aria-pressed", String(this.customMode));
    this.palette.hidden = this.customMode;
    this.customRow.hidden = !this.customMode;
    for (const [color, button] of this.buttons) button.setAttr("aria-pressed", String(color === this.themeColor));
    this.hint.setText(this.customMode ? this.strings.customColorHint : this.strings.themeColorHint);
  }
  clearError() {
    this.error.empty();
    this.hexInput.removeAttribute("aria-invalid");
  }
  showError() {
    this.error.setText(this.strings.invalidHexColor);
    this.hexInput.setAttr("aria-invalid", "true");
  }
};

// src/badge-form.ts
var BadgeForm = class {
  constructor(container, strings, options) {
    this.strings = strings;
    this.options = options;
    this.busy = false;
    this.destroyed = false;
    var _a, _b, _c, _d, _e, _f, _g;
    this.formEl = container.createEl("form", { cls: "simple-badge-form" });
    this.fields = this.formEl.createEl("fieldset");
    const label = this.fields.createEl("label", { cls: "simple-badge-field", text: strings.text });
    this.input = label.createEl("input", { type: "text", placeholder: strings.placeholder });
    this.input.value = (_b = (_a = options.initial) == null ? void 0 : _a.text) != null ? _b : "";
    this.input.required = true;
    this.input.autocomplete = "off";
    this.input.addEventListener("input", () => {
      this.status.empty();
      this.refresh();
    });
    this.fields.createDiv({ cls: "simple-badge-field-label", text: strings.color });
    this.colorPicker = new BadgeColorPicker(
      this.fields,
      strings,
      (_d = (_c = options.initial) == null ? void 0 : _c.color) != null ? _d : "blue",
      () => {
        this.status.empty();
        this.refresh();
      },
      (_e = options.initial) == null ? void 0 : _e.customColorInput
    );
    const previewRow = this.fields.createDiv({ cls: "simple-badge-form-preview" });
    previewRow.createSpan({ cls: "simple-badge-muted", text: strings.preview });
    this.preview = previewRow.createSpan({ cls: "simple-badge-preview" });
    if (options.allowSaveOption) {
      const saveLabel = this.fields.createEl("label", { cls: "simple-badge-save-option" });
      this.saveInput = saveLabel.createEl("input", { type: "checkbox" });
      this.saveInput.checked = (_g = (_f = options.initial) == null ? void 0 : _f.save) != null ? _g : false;
      saveLabel.createSpan({ text: strings.saveAsPreset });
      this.saveInput.addEventListener("change", () => this.refresh());
    }
    this.submitButton = this.fields.createEl("button", { attr: { type: "submit" } });
    this.status = this.formEl.createDiv({ cls: "simple-badge-form-status", attr: { role: "status", "aria-live": "polite" } });
    this.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      void this.submit();
    });
    this.refresh();
  }
  get draft() {
    var _a, _b;
    return {
      text: this.input.value,
      color: this.colorPicker.value,
      save: (_b = (_a = this.saveInput) == null ? void 0 : _a.checked) != null ? _b : false,
      customColorInput: this.colorPicker.customInput
    };
  }
  focus() {
    this.input.focus();
  }
  destroy() {
    this.destroyed = true;
  }
  refresh() {
    const draft = this.draft;
    this.preview.empty();
    renderBadge(this.preview, { text: draft.text.trim() || "Badge", color: draft.color });
    this.fields.disabled = this.busy;
    this.submitButton.disabled = this.busy || !draft.text.trim() || !this.colorPicker.isValid;
    this.submitButton.setText(this.busy ? this.strings.saving : draft.save ? this.strings.addAndSave : this.options.submitLabel);
  }
  async submit() {
    var _a, _b, _c, _d;
    if (this.busy || this.destroyed || !this.colorPicker.validate()) return;
    try {
      const draft = { ...normalizeBadge(this.draft, this.strings), save: this.draft.save };
      this.busy = true;
      this.status.empty();
      this.status.removeClass("is-error");
      (_b = (_a = this.options).onBusyChange) == null ? void 0 : _b.call(_a, true);
      this.refresh();
      const message = await this.options.onSubmit(draft);
      if (this.destroyed) return;
      if (this.options.resetOnSuccess) this.input.value = "";
      this.status.setText(message != null ? message : "");
    } catch (error) {
      if (!this.destroyed) {
        this.status.addClass("is-error");
        this.status.setText(error instanceof Error ? error.message : this.strings.saveFailed);
      }
    } finally {
      this.busy = false;
      if (!this.destroyed) {
        (_d = (_c = this.options).onBusyChange) == null ? void 0 : _d.call(_c, false);
        this.refresh();
      }
    }
  }
};

// src/insert-modal.ts
var BadgeInsertModal = class extends import_obsidian2.Modal {
  constructor(app, store, callbacks, session) {
    var _a;
    super(app);
    this.store = store;
    this.callbacks = callbacks;
    this.session = session;
    this.presetButtons = /* @__PURE__ */ new Map();
    this.opened = false;
    this.busy = false;
    this.shouldRestoreSelection = false;
    this.presets = (_a = session == null ? void 0 : session.presets.map((item) => ({ ...item }))) != null ? _a : store.presets;
    this.selected = new OrderedBadges(session == null ? void 0 : session.selected);
  }
  onOpen() {
    var _a;
    const strings = this.store.strings;
    this.opened = true;
    this.modalEl.addClass("simple-badge-modal");
    this.titleEl.setText(strings.insertBadge);
    const main = this.contentEl.createDiv({ cls: "simple-badge-insert-main" });
    const presets = main.createDiv();
    presets.createEl("h3", { text: strings.presetBadges });
    this.listEl = presets.createDiv({ cls: "simple-badge-preset-list" });
    const create = main.createDiv();
    create.createEl("h3", { text: strings.createBadge });
    const selection = this.contentEl.createDiv({ cls: "simple-badge-selection" });
    const selectionHeading = selection.createDiv({ cls: "simple-badge-selection-heading" });
    selectionHeading.createSpan({ text: strings.insertionOrder });
    this.countEl = selectionHeading.createSpan({ cls: "simple-badge-muted", attr: { "aria-live": "polite" } });
    this.queueEl = selection.createDiv({ cls: "simple-badge-queue" });
    this.errorEl = this.contentEl.createDiv({ cls: "simple-badge-message is-error", attr: { role: "alert" } });
    const footer = this.contentEl.createDiv({ cls: "simple-badge-footer" });
    this.relocateButton = footer.createEl("button", { text: strings.chooseNewPosition, attr: { type: "button" } });
    this.relocateButton.hidden = true;
    this.relocateButton.addEventListener("click", () => {
      var _a2, _b;
      this.callbacks.relocate({
        presets: this.presets.map((item) => ({ ...item })),
        selected: this.selected.values,
        draft: (_b = (_a2 = this.form) == null ? void 0 : _a2.draft) != null ? _b : { text: "", color: "blue", save: false }
      });
      this.close();
    });
    footer.createEl("button", { text: strings.cancel, attr: { type: "button" } }).addEventListener("click", () => this.close());
    this.insertButton = footer.createEl("button", { text: strings.insertSelected, cls: "mod-cta", attr: { type: "button" } });
    this.insertButton.addEventListener("click", () => this.insert());
    this.form = new BadgeForm(create, strings, {
      initial: (_a = this.session) == null ? void 0 : _a.draft,
      allowSaveOption: true,
      submitLabel: strings.addToSelection,
      resetOnSuccess: true,
      onBusyChange: (busy) => {
        this.busy = busy;
        this.renderSelection();
      },
      onSubmit: async (draft) => {
        var _a2, _b;
        let preset;
        if (draft.save) {
          preset = await this.store.add(draft);
          if (!this.opened) return;
          const index = this.presets.findIndex((item) => item.id === preset.id);
          if (index < 0) this.presets.push(preset);
          else this.presets[index] = preset;
        } else {
          preset = (_b = (_a2 = this.presets.find((item) => sameBadge(item, draft))) != null ? _a2 : this.selected.values.find((item) => sameBadge(item, draft))) != null ? _b : { id: createId(), text: draft.text, color: draft.color };
        }
        this.selected.add(preset);
        this.renderSelection();
        return draft.save ? strings.addedAndSaved : strings.added;
      }
    });
    this.renderSelection();
    const first = this.presetButtons.values().next().value;
    if (first) first.focus();
    else this.form.focus();
  }
  onClose() {
    var _a;
    this.opened = false;
    (_a = this.form) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
    this.callbacks.close();
  }
  renderSelection() {
    const strings = this.store.strings;
    this.listEl.empty();
    this.presetButtons.clear();
    if (!this.presets.length) this.listEl.createDiv({ cls: "simple-badge-muted", text: strings.emptyPresetsForInsert });
    for (const preset of this.presets) {
      const row = this.listEl.createDiv({ cls: "simple-badge-preset-row" });
      const index = this.selected.indexOf(preset.id);
      const color = colorLabel(preset.color, strings);
      const button = row.createEl("button", {
        cls: "simple-badge-number",
        text: index < 0 ? "" : String(index + 1),
        attr: { type: "button", "aria-pressed": String(index >= 0), "aria-label": index < 0 ? strings.selectBadge(color, preset.text) : strings.deselectBadge(color, preset.text, index + 1) }
      });
      button.disabled = this.busy;
      button.addEventListener("click", () => {
        var _a;
        this.selected.toggle(preset);
        this.renderSelection();
        (_a = this.presetButtons.get(preset.id)) == null ? void 0 : _a.focus();
      });
      this.presetButtons.set(preset.id, button);
      renderBadge(row.createSpan({ cls: "simple-badge-preview" }), preset);
    }
    this.queueEl.empty();
    this.countEl.setText(strings.selectionCount(this.selected.size));
    if (!this.selected.size) this.queueEl.createSpan({ cls: "simple-badge-muted", text: strings.noSelection });
    this.selected.values.forEach((preset, index) => {
      const chip = this.queueEl.createEl("button", { cls: "simple-badge-chip", attr: {
        type: "button",
        "aria-label": strings.removeSelected(index + 1, preset.text)
      } });
      chip.disabled = this.busy;
      chip.createSpan({ text: String(index + 1) });
      renderBadge(chip.createSpan({ cls: "simple-badge-preview" }), preset);
      if (!this.presets.some((item) => item.id === preset.id)) chip.createSpan({ cls: "simple-badge-muted", text: strings.temporary });
      chip.createSpan({ text: "\xD7", attr: { "aria-hidden": "true" } });
      chip.addEventListener("click", () => {
        var _a, _b;
        this.selected.remove(preset.id);
        this.renderSelection();
        const remaining = this.queueEl.querySelectorAll("button");
        (_b = (_a = remaining[Math.min(index, remaining.length - 1)]) != null ? _a : this.presetButtons.values().next().value) == null ? void 0 : _b.focus();
      });
    });
    this.refreshInsertButton();
  }
  refreshInsertButton() {
    this.insertButton.disabled = this.busy || !this.selected.size;
    this.relocateButton.disabled = this.busy;
  }
  insert() {
    if (this.busy || !this.selected.size || !this.opened) return;
    if (!this.callbacks.isTargetValid()) {
      this.errorEl.setText(this.store.strings.positionChanged);
      this.relocateButton.hidden = false;
      return;
    }
    const badges = this.selected.values;
    this.close();
    this.callbacks.insert(badges);
  }
};

// src/preset-store.ts
var PresetStore = class {
  constructor(storage, strings = getTranslations()) {
    this.storage = storage;
    this.strings = strings;
    this.data = { schemaVersion: 4, presets: [], settings: defaultSettings() };
    this.loaded = false;
    this.tail = Promise.resolve();
    this.listeners = /* @__PURE__ */ new Set();
  }
  async load() {
    this.data = decodeData(await this.storage.load(), this.strings);
    this.loaded = true;
  }
  get presets() {
    return this.data.presets.map((item) => ({ ...item }));
  }
  get badgeFontSizePercent() {
    return this.data.settings.badgeFontSizePercent;
  }
  get badgeCornerRoundnessPercent() {
    return this.data.settings.badgeCornerRoundnessPercent;
  }
  async setBadgeFontSizePercent(value) {
    const percent = validateFontSizePercent(value, this.strings);
    await this.mutate((draft) => {
      draft.settings.badgeFontSizePercent = percent;
    }, true, "appearance");
  }
  async setBadgeCornerRoundnessPercent(value) {
    const percent = validateCornerRoundness(value, this.strings);
    await this.mutate((draft) => {
      draft.settings.badgeCornerRoundnessPercent = percent;
    }, true, "appearance");
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  add(badge) {
    return this.mutate((draft) => {
      const value = normalizeBadge(badge, this.strings);
      const existing = draft.presets.find((item) => sameBadge(item, value));
      if (existing) return { ...existing };
      const preset = { id: createId(), ...value };
      draft.presets.push(preset);
      return { ...preset };
    });
  }
  async addMany(badges) {
    const values = badges.map((badge) => normalizeBadge(badge, this.strings));
    return this.mutate((draft) => {
      const { newBadges, skipped } = planPresetImport(values, draft.presets);
      draft.presets.push(...newBadges.map((value) => ({ id: createId(), ...value })));
      return { added: newBadges.length, skipped };
    }, true);
  }
  update(id, badge) {
    return this.mutate((draft) => {
      const index = this.findIndex(draft, id);
      const value = normalizeBadge(badge, this.strings);
      if (draft.presets.some((item) => item.id !== id && sameBadge(item, value))) {
        throw new Error(this.strings.duplicatePreset);
      }
      draft.presets[index] = { id, ...value };
    });
  }
  remove(id) {
    return this.mutate((draft) => {
      draft.presets.splice(this.findIndex(draft, id), 1);
    });
  }
  move(id, direction) {
    return this.mutate((draft) => {
      const index = this.findIndex(draft, id);
      const destination = index + direction;
      if (destination < 0 || destination >= draft.presets.length) return;
      [draft.presets[index], draft.presets[destination]] = [draft.presets[destination], draft.presets[index]];
    });
  }
  findIndex(data, id) {
    const index = data.presets.findIndex((item) => item.id === id);
    if (index < 0) throw new Error(this.strings.missingPreset);
    return index;
  }
  mutate(change, skipUnchanged = false, kind = "presets") {
    const operation = this.tail.then(async () => {
      if (!this.loaded) throw new Error(this.strings.configNotLoaded);
      const draft = { schemaVersion: 4, presets: this.presets, settings: { ...this.data.settings } };
      const result = change(draft);
      if (skipUnchanged && draft.settings.badgeFontSizePercent === this.badgeFontSizePercent && draft.settings.badgeCornerRoundnessPercent === this.badgeCornerRoundnessPercent && draft.presets.length === this.data.presets.length && draft.presets.every((preset, index) => preset.id === this.data.presets[index].id && sameBadge(preset, this.data.presets[index]))) return result;
      await this.storage.save(draft);
      this.data = draft;
      for (const listener of this.listeners) {
        try {
          listener(kind);
        } catch (error) {
          console.error("Simple Badge: settings refresh failed", error);
        }
      }
      return result;
    });
    this.tail = operation.then(() => {
    }, () => {
    });
    return operation;
  }
};

// src/settings.ts
var import_obsidian4 = require("obsidian");

// src/appearance-control.ts
var import_obsidian3 = require("obsidian");
var AppearanceControl = class {
  constructor(setting, value, strings, options, disabled) {
    this.value = value;
    this.strings = strings;
    this.options = options;
    this.validationError = "";
    this.showValidation = false;
    this.interacted = false;
    this.refreshing = false;
    this.element = setting.settingEl;
    this.lastValue = value.value;
    setting.setClass("simple-badge-appearance-control").setClass(options.className);
    const statusId = `simple-badge-appearance-status-${createId()}`;
    this.status = setting.infoEl.createDiv({ cls: "simple-badge-message", attr: { id: statusId, role: "status", "aria-live": "polite" } });
    if (options.preview) {
      this.preview = setting.infoEl.createDiv({ cls: "simple-badge-appearance-preview simple-badge-preview", attr: { "aria-label": strings.preview } });
      renderBadge(this.preview, { text: strings.defaults.blue, color: "blue" });
      renderBadge(this.preview, { text: strings.defaults.red, color: "#e67e22" });
    }
    if (options.originalCorners) {
      setting.addDropdown((mode) => {
        this.mode = mode.addOption("original", strings.originalCorners).addOption("custom", strings.customCorners).setValue(value.value === null ? "original" : "custom").setDisabled(disabled).onChange((mode2) => {
          if (this.refreshing) return;
          this.use(mode2 === "original" ? options.defaultValue : options.validate(DEFAULT_CUSTOM_ROUNDNESS_PERCENT));
          void value.flush();
        });
        mode.selectEl.setAttr("aria-label", strings.cornerMode);
        mode.selectEl.setAttr("aria-describedby", statusId);
      });
    }
    setting.addSlider((slider) => {
      var _a;
      this.slider = slider.setLimits(options.min, options.max, 1).setInstant(true).setValue((_a = value.value) != null ? _a : DEFAULT_CUSTOM_ROUNDNESS_PERCENT).setDisabled(disabled).onChange((raw) => {
        if (!this.refreshing) this.use(options.validate(raw));
      });
      if ((0, import_obsidian3.requireApiVersion)("1.13.0")) {
        if (options.originalCorners) slider.setDisplayFormat((raw) => value.value === null ? "" : `${raw}%`);
      }
      slider.sliderEl.setAttr("aria-label", options.label);
      slider.sliderEl.setAttr("aria-describedby", statusId);
      slider.sliderEl.addClass("simple-badge-percentage");
      slider.sliderEl.addEventListener("change", () => {
        void value.flush();
      });
    });
    setting.addText((text) => {
      this.input = text.setValue(value.value === null ? "" : String(value.value)).setDisabled(disabled).inputEl;
      this.input.type = "number";
      this.input.min = String(options.min);
      this.input.max = String(options.max);
      this.input.step = "1";
      this.input.addClass("simple-badge-percentage");
      this.input.setAttr("aria-label", options.inputLabel);
      this.input.setAttr("aria-describedby", statusId);
      this.input.addEventListener("input", () => {
        this.showValidation = false;
        try {
          this.use(options.validate(this.input.valueAsNumber));
        } catch (error) {
          this.validationError = error instanceof Error ? error.message : strings.saveFailed;
          this.refresh();
        }
      });
      const commit = () => {
        this.showValidation = true;
        this.refresh();
        if (!this.validationError) void value.flush();
      };
      this.input.addEventListener("blur", commit);
      this.input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          commit();
        }
      });
    });
    setting.controlEl.createSpan({ cls: "simple-badge-percentage", text: "%", attr: { "aria-hidden": "true" } });
    setting.addExtraButton((button) => button.setIcon("reset").setTooltip(options.resetLabel).setDisabled(disabled).onClick(() => {
      this.use(options.defaultValue);
      void value.flush();
    }));
    this.refresh();
  }
  refresh() {
    var _a;
    const current = this.value.value;
    if (current !== this.lastValue) {
      this.input.value = current === null ? "" : String(current);
      this.validationError = "";
      this.lastValue = current;
    }
    this.element.toggleClass("simple-badge-original-corners", current === null);
    this.refreshing = true;
    try {
      (_a = this.mode) == null ? void 0 : _a.setValue(current === null ? "original" : "custom");
      this.slider.setValue(current != null ? current : DEFAULT_CUSTOM_ROUNDNESS_PERCENT);
    } finally {
      this.refreshing = false;
    }
    this.slider.sliderEl.setAttr("aria-valuetext", current === null ? this.strings.originalCorners : `${current}%`);
    this.input.setAttr("aria-invalid", String(!!this.validationError));
    const error = this.validationError && this.showValidation ? this.validationError : this.value.error;
    this.status.setText(error || (this.value.saving ? this.strings.saving : this.interacted ? this.options.savedMessage : ""));
    this.status.toggleClass("is-error", !!error);
  }
  destroy() {
    var _a;
    this.status.remove();
    (_a = this.preview) == null ? void 0 : _a.remove();
  }
  use(value) {
    this.validationError = "";
    this.showValidation = false;
    this.interacted = true;
    this.input.value = value === null ? "" : String(value);
    this.value.set(value);
    this.refresh();
  }
};

// src/settings.ts
var PresetEditModal = class extends import_obsidian4.Modal {
  constructor(app, strings, preset, save, closed) {
    super(app);
    this.strings = strings;
    this.preset = preset;
    this.save = save;
    this.closed = closed;
  }
  onOpen() {
    this.modalEl.addClass("simple-badge-edit-modal");
    this.titleEl.setText(this.preset ? this.strings.editPreset : this.strings.newPreset);
    this.form = new BadgeForm(this.contentEl, this.strings, {
      initial: this.preset ? { ...this.preset, save: false } : void 0,
      submitLabel: this.strings.savePreset,
      onSubmit: async (draft) => {
        await this.save(draft);
        this.close();
      }
    });
    this.form.focus();
  }
  onClose() {
    var _a;
    (_a = this.form) == null ? void 0 : _a.destroy();
    this.contentEl.empty();
    this.closed();
  }
};
var SimpleBadgeSettingTab = class extends import_obsidian4.PluginSettingTab {
  constructor(app, owner) {
    super(app, owner);
    this.owner = owner;
    this.busy = false;
    this.visible = false;
    this.status = "";
    this.statusIsError = false;
    this.appearanceControls = /* @__PURE__ */ new Set();
    owner.register(owner.presets.subscribe((change) => {
      if (change === "presets") this.refresh();
    }));
    const refreshAppearance = () => {
      for (const control of this.appearanceControls) {
        if (control.element.isConnected) control.refresh();
        else {
          control.destroy();
          this.appearanceControls.delete(control);
        }
      }
    };
    owner.register(owner.fontSize.subscribe(refreshAppearance));
    owner.register(owner.roundness.subscribe(refreshAppearance));
  }
  // Obsidian 1.13+ renders and indexes these definitions instead of display().
  getSettingDefinitions() {
    var _a;
    const strings = this.owner.strings;
    return [
      {
        type: "group",
        heading: strings.appearance,
        items: [{
          name: strings.badgeFontSize,
          desc: strings.badgeFontSizeDescription,
          aliases: ["badge", "font", "size", "scale", "%", "\u5B57\u53F7", "\u6BD4\u4F8B"],
          render: (setting) => this.renderAppearance(setting, "fontSize")
        }, {
          name: strings.badgeCornerRoundness,
          desc: strings.badgeCornerRoundnessDescription,
          aliases: ["badge", "shape", "corner", "radius", "roundness", "pill", "\u5706\u89D2", "\u5F62\u72B6", "\u80F6\u56CA"],
          render: (setting) => this.renderAppearance(setting, "roundness")
        }]
      },
      {
        type: "group",
        heading: strings.presetBadges,
        items: [{
          name: strings.addPreset,
          desc: strings.presetDescription,
          aliases: ["badge", "badges"],
          render: (setting) => this.renderAdd(setting)
        }, {
          name: strings.importPresets,
          desc: strings.importDescription,
          aliases: ["span", "HTML", "import", "badge"],
          render: (setting) => this.renderImport(setting)
        }]
      },
      {
        type: "list",
        emptyState: strings.emptyPresetsForSettings,
        items: this.owner.presets.presets.map((preset) => ({
          name: preset.text,
          desc: colorLabel(preset.color, strings),
          aliases: [strings.presetBadges, "badge"],
          render: (setting) => this.renderPreset(setting, preset)
        }))
      },
      {
        name: (_a = this.owner.loadError) != null ? _a : this.status,
        searchable: false,
        visible: () => !!(this.owner.loadError || this.status),
        render: (setting) => this.renderStatus(setting)
      }
    ];
  }
  // Older Obsidian versions use the same row renderers through display().
  display() {
    this.visible = true;
    this.renderLegacy();
  }
  hide() {
    this.visible = false;
    for (const control of this.appearanceControls) control.destroy();
    this.appearanceControls.clear();
    void this.owner.fontSize.flush();
    void this.owner.roundness.flush();
  }
  renderLegacy() {
    var _a;
    const strings = this.owner.strings;
    this.containerEl.empty();
    new import_obsidian4.Setting(this.containerEl).setName(strings.appearance).setHeading();
    this.renderAppearance(new import_obsidian4.Setting(this.containerEl).setName(strings.badgeFontSize).setDesc(strings.badgeFontSizeDescription), "fontSize");
    this.renderAppearance(new import_obsidian4.Setting(this.containerEl).setName(strings.badgeCornerRoundness).setDesc(strings.badgeCornerRoundnessDescription), "roundness");
    new import_obsidian4.Setting(this.containerEl).setName(strings.presetBadges).setHeading();
    this.renderAdd(new import_obsidian4.Setting(this.containerEl).setName(strings.addPreset).setDesc(strings.presetDescription));
    this.renderImport(new import_obsidian4.Setting(this.containerEl).setName(strings.importPresets).setDesc(strings.importDescription));
    const presets = this.owner.presets.presets;
    if (!presets.length) this.containerEl.createEl("p", { cls: "simple-badge-muted", text: strings.emptyPresetsForSettings });
    for (const preset of presets) {
      this.renderPreset(new import_obsidian4.Setting(this.containerEl).setName(preset.text).setDesc(colorLabel(preset.color, strings)), preset);
    }
    if (this.owner.loadError || this.status) this.renderStatus(new import_obsidian4.Setting(this.containerEl).setName((_a = this.owner.loadError) != null ? _a : this.status));
  }
  renderAdd(setting) {
    setting.addButton((button) => button.setButtonText(this.owner.strings.addPreset).setCta().setDisabled(this.busy || !!this.owner.loadError).onClick(() => this.owner.openPresetEditor()));
  }
  renderAppearance(setting, kind) {
    this.owner.appearance.attach(setting.settingEl.ownerDocument);
    for (const control2 of this.appearanceControls) {
      if (!control2.element.isConnected || control2.element === setting.settingEl) {
        control2.destroy();
        this.appearanceControls.delete(control2);
      }
    }
    const strings = this.owner.strings;
    const disabled = !!this.owner.loadError;
    const control = kind === "fontSize" ? new AppearanceControl(setting, this.owner.fontSize, strings, {
      className: "simple-badge-font-size",
      min: MIN_BADGE_FONT_SIZE_PERCENT,
      max: MAX_BADGE_FONT_SIZE_PERCENT,
      defaultValue: DEFAULT_BADGE_FONT_SIZE_PERCENT,
      validate: (value) => validateFontSizePercent(value, strings),
      label: strings.badgeFontSize,
      inputLabel: strings.badgeFontSizeInput,
      resetLabel: strings.resetFontSize,
      savedMessage: strings.fontSizeSaved
    }, disabled) : new AppearanceControl(setting, this.owner.roundness, strings, {
      className: "simple-badge-roundness",
      min: 0,
      max: 100,
      defaultValue: null,
      validate: (value) => validateCornerRoundness(value, strings),
      label: strings.badgeCornerRoundness,
      inputLabel: strings.badgeCornerRoundnessInput,
      resetLabel: strings.resetCornerRoundness,
      savedMessage: strings.cornerRoundnessSaved,
      originalCorners: true,
      preview: true
    }, disabled);
    this.appearanceControls.add(control);
    return () => {
      control.destroy();
      this.appearanceControls.delete(control);
    };
  }
  renderImport(setting) {
    setting.addButton((button) => button.setButtonText(this.owner.strings.importAction).setDisabled(this.busy || !!this.owner.loadError).onClick(() => this.owner.openPresetImporter()));
  }
  renderPreset(setting, preset) {
    this.owner.appearance.attach(setting.settingEl.ownerDocument);
    const strings = this.owner.strings;
    const presets = this.owner.presets.presets;
    const index = presets.findIndex((item) => item.id === preset.id);
    const disabled = this.busy || index < 0 || !!this.owner.loadError;
    setting.nameEl.empty();
    renderBadge(setting.nameEl, preset);
    setting.addExtraButton((button) => button.setIcon("arrow-up").setTooltip(strings.moveUp(preset.text)).setDisabled(disabled || index === 0).onClick(() => {
      void this.runAction(() => this.owner.presets.move(preset.id, -1), strings.orderSaved);
    }));
    setting.addExtraButton((button) => button.setIcon("arrow-down").setTooltip(strings.moveDown(preset.text)).setDisabled(disabled || index === presets.length - 1).onClick(() => {
      void this.runAction(() => this.owner.presets.move(preset.id, 1), strings.orderSaved);
    }));
    setting.addButton((button) => {
      button.setButtonText(strings.edit).setDisabled(disabled).onClick(() => this.owner.openPresetEditor(preset));
      button.buttonEl.setAttr("aria-label", strings.editNamed(preset.text));
    });
    setting.addButton((button) => {
      button.setButtonText(strings.delete).setDisabled(disabled).onClick(() => {
        void this.runAction(() => this.owner.presets.remove(preset.id), strings.presetDeleted);
      });
      button.buttonEl.setAttr("aria-label", strings.deleteNamed(preset.text));
    });
  }
  renderStatus(setting) {
    setting.setClass("simple-badge-message");
    const isError = !!this.owner.loadError || this.statusIsError;
    setting.settingEl.toggleClass("is-error", isError);
    setting.settingEl.setAttr("role", isError ? "alert" : "status");
    setting.settingEl.setAttr("aria-live", "polite");
  }
  refresh() {
    if ((0, import_obsidian4.requireApiVersion)("1.13.0")) this.update();
    else if (this.visible) this.renderLegacy();
  }
  async runAction(action, success) {
    if (this.busy) return;
    this.busy = true;
    this.refresh();
    try {
      await action();
      this.statusIsError = false;
      this.status = success;
    } catch (error) {
      this.statusIsError = true;
      this.status = error instanceof Error ? error.message : this.owner.strings.saveFailed;
    } finally {
      this.busy = false;
      this.refresh();
    }
  }
};

// src/editor-target.ts
function captureEditorTarget(editor, info, isAvailable, getRevision) {
  const file = info.file;
  const text = editor.getValue();
  const revision = getRevision();
  return {
    position: { ...editor.getCursor("to") },
    isValid: () => isAvailable() && info.file === file && (info.editor === void 0 || info.editor === editor) && getRevision() === revision && editor.getValue() === text
  };
}

// src/import-modal.ts
var import_obsidian5 = require("obsidian");

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/decode-codepoint.js
var c1 = [
  8364,
  0,
  8218,
  402,
  8222,
  8230,
  8224,
  8225,
  710,
  8240,
  352,
  8249,
  338,
  0,
  381,
  0,
  0,
  8216,
  8217,
  8220,
  8221,
  8226,
  8211,
  8212,
  732,
  8482,
  353,
  8250,
  339,
  0,
  382,
  376
];
function isInvalidCodePoint(codePoint) {
  return codePoint === 0 || codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111;
}
function replaceCodePoint(codePoint) {
  if (isInvalidCodePoint(codePoint)) {
    return 65533;
  }
  if (codePoint >= 128 && codePoint <= 159) {
    return c1[codePoint - 128] || codePoint;
  }
  return codePoint;
}
function codePointToString(codePoint) {
  return codePoint - 1 >>> 0 < 127 || codePoint - 160 >>> 0 < 55136 ? String.fromCharCode(codePoint) : String.fromCodePoint(replaceCodePoint(codePoint));
}

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/internal/decode-shared.js
var BASE91_INVERSE = /* @__PURE__ */ (() => {
  const table = new Uint8Array(127);
  let code = 0;
  for (let char = 33; char <= 126; char++) {
    if (char !== 34 && char !== 36 && char !== 92) {
      table[char] = code++;
    }
  }
  return table;
})();
function decodeTrieDict(input, resultLength, atomCount, dict1AtomCount, ngramCount, dictSize) {
  const base = 91;
  const inputLength = input.length;
  const twoCharBias = dictSize * (base - 1);
  let pos = 0;
  const readSlotCode = () => {
    const c12 = BASE91_INVERSE[input.charCodeAt(pos++)];
    return c12 < dictSize ? c12 : c12 * base - twoCharBias + BASE91_INVERSE[input.charCodeAt(pos++)];
  };
  const dict2AtomCount = atomCount - dict1AtomCount;
  const slotCount = atomCount + ngramCount;
  const single = new Int32Array(slotCount);
  single.fill(-1, dict1AtomCount, dictSize);
  single.fill(-1, dictSize + dict2AtomCount, slotCount);
  const start = new Int32Array(slotCount);
  const length = new Int32Array(slotCount);
  function decodeDelta(count, off) {
    let previous = 0;
    let slot = off;
    const end = off + count;
    while (slot < end) {
      const code = BASE91_INVERSE[input.charCodeAt(pos++)];
      if (code < 89) {
        previous += code;
        single[slot++] = previous;
      } else if (code === 89) {
        let runLength = BASE91_INVERSE[input.charCodeAt(pos++)] + 2;
        while (runLength--)
          single[slot++] = ++previous;
      } else {
        const next = BASE91_INVERSE[input.charCodeAt(pos++)];
        previous += 89 + // eslint-disable-next-line unicorn/prefer-minimal-ternary -- branches read a different number of side-effecting input bytes
        (next < 90 ? next * base + BASE91_INVERSE[input.charCodeAt(pos++)] : BASE91_INVERSE[input.charCodeAt(pos++)] * 8281 + BASE91_INVERSE[input.charCodeAt(pos++)] * base + BASE91_INVERSE[input.charCodeAt(pos++)]);
        single[slot++] = previous;
      }
    }
  }
  decodeDelta(dict1AtomCount, 0);
  decodeDelta(dict2AtomCount, dictSize);
  const references = new Int32Array(ngramCount * 2);
  let poolSize = 0;
  let ngramIndex = 0;
  function readNgramReferences(count, startSlot) {
    for (let index = 0; index < count; index++) {
      const slot = startSlot + index;
      const a = readSlotCode();
      const b = readSlotCode();
      references[ngramIndex * 2] = a;
      references[ngramIndex * 2 + 1] = b;
      ngramIndex += 1;
      start[slot] = poolSize;
      const entryLength = (single[a] < 0 ? length[a] : 1) + (single[b] < 0 ? length[b] : 1);
      length[slot] = entryLength;
      poolSize += entryLength;
    }
  }
  readNgramReferences(ngramCount - dictSize + dict1AtomCount, dictSize + dict2AtomCount);
  readNgramReferences(dictSize - dict1AtomCount, dict1AtomCount);
  const pool = new Uint16Array(poolSize);
  let write = 0;
  for (let index = 0; index < ngramIndex; index++) {
    for (let half = 0; half < 2; half++) {
      const source = references[index * 2 + half];
      const value = single[source];
      if (value < 0) {
        let read = start[source];
        const readEnd = read + length[source];
        while (read < readEnd)
          pool[write++] = pool[read++];
      } else {
        pool[write++] = value;
      }
    }
  }
  const out = new Uint16Array(resultLength);
  let outIndex = 0;
  while (pos < inputLength) {
    let slot = BASE91_INVERSE[input.charCodeAt(pos++)];
    if (slot >= dictSize) {
      slot = slot * base - twoCharBias + BASE91_INVERSE[input.charCodeAt(pos++)];
    }
    const value = single[slot];
    if (value < 0) {
      let read = start[slot];
      const readEnd = read + length[slot];
      while (read < readEnd)
        out[outIndex++] = pool[read++];
    } else {
      out[outIndex++] = value;
    }
  }
  return out;
}

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/generated/decode-data-html.js
var htmlDecodeTree = /* @__PURE__ */ decodeTrieDict("!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P", 13494, 2713, 49, 25, 61);

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/internal/bin-trie-flags.js
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["FLAG13"] = 8192] = "FLAG13";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
  BinTrieFlags2[BinTrieFlags2["VALUE_MASK"] = 8191] = "VALUE_MASK";
})(BinTrieFlags || (BinTrieFlags = {}));

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/decode.js
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["AMP"] = 38] = "AMP";
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
var CONSUMED_SHIFT = 21;
var CODE_POINT_MASK = 2097151;
var CONSUMED_OVERFLOW = 2047;
var longNumericConsumed = 0;
function unpackConsumed(packed) {
  const consumed = packed >>> CONSUMED_SHIFT;
  return consumed === CONSUMED_OVERFLOW ? longNumericConsumed : consumed;
}
function isNumber(code) {
  return code - CharCodes.ZERO >>> 0 <= 9;
}
function isHexadecimalCharacter(code) {
  return (code | TO_LOWER_BIT) - CharCodes.LOWER_A >>> 0 <= 5;
}
function isAlpha(code) {
  return (code | TO_LOWER_BIT) - CharCodes.LOWER_A >>> 0 <= 25;
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAlpha(code) || isNumber(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
function determineBranch(decodeTree, current, nodeIndex, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (jumpOffset) {
    if (branchCount === 0) {
      return char === jumpOffset ? nodeIndex : -1;
    }
    const slot = char - jumpOffset;
    if (slot >>> 0 >= branchCount)
      return -1;
    const stored = decodeTree[nodeIndex + slot];
    return stored === 0 ? -1 : nodeIndex + branchCount + stored - 1 & 65535;
  }
  if (branchCount === 0)
    return -1;
  const packedKeySlots = branchCount + 1 >> 1;
  const branchEnd = nodeIndex + packedKeySlots + branchCount;
  for (let index = 0; index < branchCount; index++) {
    const packed = decodeTree[nodeIndex + (index >> 1)];
    const key = packed >> ((index & 1) << 3) & 255;
    if (key === char) {
      const pointerIndex = nodeIndex + packedKeySlots + index;
      return branchEnd + decodeTree[pointerIndex] & 65535;
    }
    if (key > char)
      return -1;
  }
  return -1;
}
function readTrieValue(decodeTree, nodeIndex, valueLength) {
  if (valueLength === 1) {
    return String.fromCharCode(decodeTree[nodeIndex] & BinTrieFlags.VALUE_MASK);
  }
  if (valueLength === 2) {
    return String.fromCharCode(decodeTree[nodeIndex + 1]);
  }
  return String.fromCharCode(decodeTree[nodeIndex + 1], decodeTree[nodeIndex + 2]);
}
function parseNumericEntity(input, numberStart, inputLength) {
  let offset = numberStart + 1;
  let cp = 0;
  let digitStart = offset;
  if (offset < inputLength && (input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
    offset += 1;
    digitStart = offset;
    while (offset < inputLength) {
      const char = input.charCodeAt(offset);
      if (isNumber(char)) {
        cp = cp * 16 + (char - CharCodes.ZERO);
      } else if (isHexadecimalCharacter(char)) {
        cp = cp * 16 + ((char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10);
      } else {
        break;
      }
      offset += 1;
    }
  } else {
    while (offset < inputLength) {
      const digit = input.charCodeAt(offset) - CharCodes.ZERO;
      if (digit >>> 0 > 9)
        break;
      cp = cp * 10 + digit;
      offset += 1;
    }
  }
  if (offset === digitStart)
    return 0;
  if (offset < inputLength && input.charCodeAt(offset) === CharCodes.SEMI) {
    offset += 1;
  }
  if (cp > 1114111)
    cp = 1114112;
  let consumed = offset - numberStart;
  if (consumed >= CONSUMED_OVERFLOW) {
    longNumericConsumed = consumed;
    consumed = CONSUMED_OVERFLOW;
  }
  return consumed << CONSUMED_SHIFT | cp;
}
function decodeWithTrie(input, isStrict, isAttribute) {
  const decodeTree = htmlDecodeTree;
  let offset = input.indexOf("&");
  if (offset < 0)
    return input;
  const inputLength = input.length;
  let chunkStart = 0;
  let result = "";
  const root = decodeTree[0];
  const rootJumpOffset = root & BinTrieFlags.JUMP_TABLE;
  const rootBranchCount = (root & BinTrieFlags.BRANCH_LENGTH) >> 7;
  do {
    const entityStart = offset + 1;
    const firstChar = input.charCodeAt(entityStart);
    let consumed;
    let value;
    if (firstChar === CharCodes.NUM) {
      const packed = parseNumericEntity(input, entityStart, inputLength);
      consumed = unpackConsumed(packed);
      if (isStrict && consumed > 0 && input.charCodeAt(entityStart + consumed - 1) !== CharCodes.SEMI) {
        consumed = 0;
      }
      value = consumed === 0 ? "" : codePointToString(packed & CODE_POINT_MASK);
    } else if (isAlpha(firstChar)) {
      consumed = 0;
      value = "";
      const rootSlotIndex = firstChar - rootJumpOffset;
      let nodeIndex;
      if (rootSlotIndex >>> 0 < rootBranchCount) {
        const stored = decodeTree[1 + rootSlotIndex];
        nodeIndex = stored === 0 ? -1 : rootBranchCount + stored & 65535;
      } else {
        nodeIndex = -1;
      }
      let bestNodeIndex = 0;
      let bestValueLength = 0;
      let current = nodeIndex < 0 ? 0 : decodeTree[nodeIndex];
      let index = entityStart + 1;
      trie: while (index < inputLength) {
        while (
          // Value-less, non-run node with a nonzero jump offset.
          (current & (BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13)) === 0 && (current & BinTrieFlags.JUMP_TABLE) !== 0
        ) {
          const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
          const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
          if (branchCount === 0) {
            if (input.charCodeAt(index) !== jumpOffset)
              break trie;
            nodeIndex += 1;
          } else {
            const slot = input.charCodeAt(index) - jumpOffset;
            if (slot >>> 0 >= branchCount)
              break trie;
            const stored = decodeTree[nodeIndex + 1 + slot];
            if (stored === 0)
              break trie;
            nodeIndex = nodeIndex + branchCount + stored & 65535;
          }
          current = decodeTree[nodeIndex];
          index += 1;
          if (index >= inputLength)
            break trie;
        }
        if ((current & (BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13)) === BinTrieFlags.FLAG13) {
          const runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
          if (input.charCodeAt(index) !== (current & BinTrieFlags.JUMP_TABLE)) {
            break;
          }
          index += 1;
          const remaining = runLength - 1;
          let wordIndex = nodeIndex + 1;
          let charIndexInPacked = 0;
          for (; charIndexInPacked + 1 < remaining; charIndexInPacked += 2) {
            const packed = decodeTree[wordIndex];
            if (input.charCodeAt(index) !== (packed & 255))
              break trie;
            index += 1;
            if (input.charCodeAt(index) !== (packed >> 8 & 255))
              break trie;
            index += 1;
            wordIndex += 1;
          }
          if (charIndexInPacked < remaining) {
            if (input.charCodeAt(index) !== (decodeTree[wordIndex] & 255))
              break;
            index += 1;
          }
          nodeIndex += 1 + (runLength >> 1);
          current = decodeTree[nodeIndex];
          continue;
        }
        const valueLength = current >>> 14;
        const char = input.charCodeAt(index);
        if (valueLength !== 0) {
          if (char === CharCodes.SEMI) {
            consumed = index - entityStart + 1;
            value = valueLength === 1 ? String.fromCharCode(current & BinTrieFlags.VALUE_MASK) : readTrieValue(decodeTree, nodeIndex, valueLength);
            break;
          }
          if (!isStrict && (current & BinTrieFlags.FLAG13) === 0) {
            consumed = index - entityStart;
            bestNodeIndex = nodeIndex;
            bestValueLength = valueLength;
          }
          if (valueLength === 1)
            break;
        }
        const next = determineBranch(decodeTree, current, nodeIndex + (valueLength || 1), char);
        if (next < 0)
          break;
        nodeIndex = next;
        current = decodeTree[nodeIndex];
        index += 1;
      }
      if (value === "") {
        const finalVL = current >>> 14;
        if (finalVL !== 0 && !isStrict && (current & BinTrieFlags.FLAG13) === 0) {
          consumed = index - entityStart;
          bestNodeIndex = nodeIndex;
          bestValueLength = finalVL;
        }
        if (consumed > 0) {
          value = readTrieValue(decodeTree, bestNodeIndex, bestValueLength);
        }
      }
    } else {
      consumed = 0;
      value = "";
    }
    if (consumed === 0 || isAttribute && firstChar !== CharCodes.NUM && input.charCodeAt(entityStart + consumed - 1) !== CharCodes.SEMI && entityStart + consumed < inputLength && isEntityInAttributeInvalidEnd(input.charCodeAt(entityStart + consumed))) {
      offset = entityStart;
    } else {
      if (chunkStart < offset) {
        result += input.slice(chunkStart, offset);
      }
      result += value;
      offset = chunkStart = entityStart + consumed;
    }
    if (input.charCodeAt(offset) !== CharCodes.AMP) {
      offset = input.indexOf("&", offset);
    }
  } while (offset >= 0);
  return result + input.slice(chunkStart);
}
function decodeHTML(htmlString, mode = DecodingMode.Legacy) {
  return decodeWithTrie(htmlString, mode === DecodingMode.Strict, mode === DecodingMode.Attribute);
}
function decodeHTMLAttribute(htmlAttribute) {
  return decodeWithTrie(htmlAttribute, false, true);
}

// node_modules/.pnpm/entities@8.1.0/node_modules/entities/dist/index.js
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
  EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
  EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
  EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
  EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
  EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

// src/span-import.ts
var MAX_IMPORT_BADGES = 500;
var MAX_IMPORT_LENGTH = 2e5;
function parseBadgeSpans(source, strings = getTranslations()) {
  var _a, _b, _c, _d;
  if (source.length > MAX_IMPORT_LENGTH) throw new Error(strings.importTooLarge);
  let input = source.trim();
  if (!input) throw new Error(strings.importRequired);
  if (input.startsWith("```")) {
    const fence = /^```(?:html)?[\t ]*\r?\n([\s\S]*?)\r?\n```$/i.exec(input);
    if (!fence) throw new Error(strings.importSyntax);
    input = fence[1].trim();
    if (!input) throw new Error(strings.importRequired);
  }
  const badges = [];
  const span = /<span(?=[\t\n\f\r >])((?:[^<>"']|"[^"<>]*"|'[^'<>]*')*)>([^<]*)<\/span[\t\n\f\r ]*>/iy;
  const attribute = /[\t\n\f\r ]+(class|style)[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]*)"|'([^']*)'|([^\t\n\f\r "'`=<>]+))/iy;
  let offset = 0;
  while (offset < input.length) {
    while (offset < input.length && /\s/.test(input[offset])) offset++;
    if (offset === input.length) break;
    if (badges.length === MAX_IMPORT_BADGES) throw new Error(strings.importTooMany(MAX_IMPORT_BADGES));
    try {
      span.lastIndex = offset;
      const match = span.exec(input);
      if (!match) throw new Error(strings.importSyntax);
      offset = span.lastIndex;
      const attributes = /* @__PURE__ */ new Map();
      let attributeOffset = 0;
      while (match[1].slice(attributeOffset).trim()) {
        attribute.lastIndex = attributeOffset;
        const part = attribute.exec(match[1]);
        if (!part) throw new Error(strings.importAttributes);
        const name = part[1].toLowerCase();
        if (attributes.has(name)) throw new Error(strings.importAttributes);
        attributes.set(name, decodeHTMLAttribute((_b = (_a = part[2]) != null ? _a : part[3]) != null ? _b : part[4]));
        attributeOffset = attribute.lastIndex;
      }
      const classes = new Set(((_c = attributes.get("class")) != null ? _c : "").split(/[\t\n\f\r ]+/).filter(Boolean));
      if (classes.size !== 2 || !classes.delete("badge")) throw new Error(strings.importClasses);
      const colorClass = Array.from(classes)[0];
      const style = (_d = attributes.get("style")) != null ? _d : "";
      let color;
      if (colorClass === "badge-custom") {
        const custom = /^[\t\n\f\r ]*--simple-badge-color[\t\n\f\r ]*:[\t\n\f\r ]*(#[\da-fA-F]{3}(?:[\da-fA-F]{3})?)[\t\n\f\r ]*;?[\t\n\f\r ]*$/.exec(style);
        const hex = normalizeHexColor(custom == null ? void 0 : custom[1]);
        if (!hex) throw new Error(strings.importCustomStyle);
        color = hex;
      } else {
        const name = colorClass.startsWith("badge-") ? colorClass.slice(6) : void 0;
        if (!isThemeColor(name)) throw new Error(strings.importClasses);
        if (style.trim()) throw new Error(strings.importThemeStyle);
        color = name;
      }
      badges.push(normalizeBadge({ text: decodeHTML(match[2]).trim(), color }, strings));
    } catch (error) {
      throw new Error(strings.importItemError(badges.length + 1, error instanceof Error ? error.message : strings.importSyntax));
    }
  }
  return badges;
}

// src/import-modal.ts
var PresetImportModal = class extends import_obsidian5.Modal {
  constructor(app, store, save, closed) {
    super(app);
    this.store = store;
    this.save = save;
    this.closed = closed;
    this.badges = [];
    this.busy = false;
    this.opened = false;
  }
  onOpen() {
    this.opened = true;
    const strings = this.store.strings;
    this.modalEl.addClass("simple-badge-import-modal");
    this.titleEl.setText(strings.importPresets);
    const hintId = `simple-badge-import-hint-${createId()}`;
    const errorId = `simple-badge-import-error-${createId()}`;
    this.contentEl.createEl("p", { text: strings.importHint, cls: "simple-badge-muted", attr: { id: hintId } });
    const label = this.contentEl.createEl("label", { text: strings.spanCode, cls: "simple-badge-field" });
    this.input = label.createEl("textarea", { cls: "simple-badge-span-input", attr: { "aria-describedby": `${hintId} ${errorId}` } });
    this.input.rows = 7;
    this.input.spellcheck = false;
    this.input.placeholder = strings.importPlaceholder;
    this.input.addEventListener("input", () => this.validateInput());
    this.summary = this.contentEl.createDiv({ cls: "simple-badge-muted", attr: { role: "status", "aria-live": "polite" } });
    this.preview = this.contentEl.createDiv({ cls: "simple-badge-import-preview", attr: { "aria-label": strings.preview } });
    this.error = this.contentEl.createDiv({ cls: "simple-badge-message is-error", attr: { id: errorId, role: "status", "aria-live": "polite" } });
    const footer = this.contentEl.createDiv({ cls: "simple-badge-footer" });
    this.cancelButton = footer.createEl("button", { text: strings.cancel, attr: { type: "button" } });
    this.cancelButton.addEventListener("click", () => this.close());
    this.addButton = footer.createEl("button", { text: strings.importAction, cls: "mod-cta", attr: { type: "button" } });
    this.addButton.addEventListener("click", () => {
      void this.submit();
    });
    this.unsubscribe = this.store.subscribe((change) => {
      if (change === "presets") this.renderPreview();
    });
    this.renderPreview();
    this.input.focus();
  }
  onClose() {
    var _a;
    this.opened = false;
    (_a = this.unsubscribe) == null ? void 0 : _a.call(this);
    this.contentEl.empty();
    this.closed();
  }
  validateInput() {
    this.badges = [];
    this.error.empty();
    this.input.removeAttribute("aria-invalid");
    if (this.input.value.trim()) {
      try {
        this.badges = parseBadgeSpans(this.input.value, this.store.strings);
      } catch (error) {
        this.error.setText(error instanceof Error ? error.message : this.store.strings.importSyntax);
        this.input.setAttr("aria-invalid", "true");
      }
    }
    this.renderPreview();
  }
  renderPreview() {
    if (!this.opened) return;
    const { newBadges, skipped } = planPresetImport(this.badges, this.store.presets);
    this.summary.setText(this.badges.length ? this.store.strings.importSummary(newBadges.length, skipped) : "");
    this.preview.empty();
    for (const badge of newBadges) renderBadge(this.preview, badge);
    this.input.disabled = this.busy;
    this.cancelButton.disabled = this.busy;
    this.addButton.disabled = this.busy || !newBadges.length;
    this.addButton.setText(this.busy ? this.store.strings.saving : this.store.strings.importAction);
  }
  async submit() {
    if (this.busy || !this.opened || !this.badges.length) return;
    this.busy = true;
    this.error.empty();
    this.renderPreview();
    try {
      const result = await this.save(this.badges);
      if (!this.opened) return;
      new import_obsidian5.Notice(this.store.strings.importSuccess(result.added, result.skipped));
      this.close();
    } catch (error) {
      if (this.opened) this.error.setText(error instanceof Error ? error.message : this.store.strings.saveFailed);
    } finally {
      this.busy = false;
      this.renderPreview();
    }
  }
};

// src/appearance.ts
var AppearanceValue = class {
  constructor(source, timerWindow) {
    this.source = source;
    this.timerWindow = timerWindow;
    this.saving = false;
    this.error = "";
    this.revision = 0;
    this.disposed = false;
    this.listeners = /* @__PURE__ */ new Set();
    this.value = source.read();
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  set(value) {
    if (this.disposed) return;
    this.source.validate(value);
    if (value === this.value && !this.error) return;
    this.value = value;
    this.pending = value;
    this.revision++;
    this.saving = true;
    this.error = "";
    if (this.timer !== void 0) this.timerWindow.clearTimeout(this.timer);
    this.timer = this.timerWindow.setTimeout(() => {
      void this.flush();
    }, 250);
    this.emit();
  }
  async flush() {
    if (this.timer !== void 0) this.timerWindow.clearTimeout(this.timer);
    this.timer = void 0;
    const value = this.pending;
    if (value === void 0) return;
    this.pending = void 0;
    const revision = this.revision;
    try {
      await this.source.write(value);
    } catch (error) {
      console.error("Simple Badge: appearance save failed", error);
      if (revision === this.revision) {
        this.value = this.source.read();
        this.error = this.source.failureMessage;
      }
    } finally {
      if (revision === this.revision) {
        this.saving = false;
        this.emit();
      }
    }
  }
  dispose() {
    this.disposed = true;
    this.listeners.clear();
    void this.flush();
  }
  emit() {
    if (this.disposed) return;
    for (const listener of this.listeners) {
      try {
        listener();
      } catch (error) {
        console.error("Simple Badge: appearance refresh failed", error);
      }
    }
  }
};
var BadgeFontSize = class extends AppearanceValue {
  constructor(store, timerWindow) {
    super({
      read: () => store.badgeFontSizePercent,
      write: (value) => store.setBadgeFontSizePercent(value),
      validate: (value) => validateFontSizePercent(value, store.strings),
      failureMessage: store.strings.fontSizeSaveFailed
    }, timerWindow);
  }
};
var BadgeRoundness = class extends AppearanceValue {
  constructor(store, timerWindow) {
    super({
      read: () => store.badgeCornerRoundnessPercent,
      write: (value) => store.setBadgeCornerRoundnessPercent(value),
      validate: (value) => validateCornerRoundness(value, store.strings),
      failureMessage: store.strings.cornerRoundnessSaveFailed
    }, timerWindow);
  }
};
var FONT_SIZE_PROPERTY = "--simple-badge-font-size";
var ROUNDNESS_PROPERTY = "--simple-badge-border-radius";
function cornerRadiusCss(percent) {
  validateCornerRoundness(percent);
  if (percent === null) return "4px";
  if (percent === 100) return "999px";
  return `calc(${percent / 100} * (0.755em + 1px))`;
}
var BadgeAppearance = class {
  constructor(percent, roundness = null) {
    this.percent = percent;
    this.roundness = roundness;
    this.documents = /* @__PURE__ */ new Map();
    this.disposed = false;
  }
  attach(doc) {
    if (this.disposed || this.documents.has(doc)) return;
    const style = doc.documentElement.style;
    const win = doc.defaultView;
    const closed = () => this.detach(doc);
    win == null ? void 0 : win.addEventListener("pagehide", closed, { once: true });
    this.documents.set(doc, {
      properties: [FONT_SIZE_PROPERTY, ROUNDNESS_PROPERTY].map((name) => ({
        name,
        value: style.getPropertyValue(name),
        priority: style.getPropertyPriority(name)
      })),
      cleanup: () => win == null ? void 0 : win.removeEventListener("pagehide", closed)
    });
    style.setProperty(FONT_SIZE_PROPERTY, `${this.percent}%`);
    style.setProperty(ROUNDNESS_PROPERTY, cornerRadiusCss(this.roundness));
  }
  set(percent) {
    if (this.disposed) return;
    this.percent = percent;
    for (const doc of this.documents.keys()) doc.documentElement.style.setProperty(FONT_SIZE_PROPERTY, `${percent}%`);
  }
  setRoundness(percent) {
    if (this.disposed) return;
    const radius = cornerRadiusCss(percent);
    this.roundness = percent;
    for (const doc of this.documents.keys()) doc.documentElement.style.setProperty(ROUNDNESS_PROPERTY, radius);
  }
  detach(doc) {
    const previous = this.documents.get(doc);
    if (!previous) return;
    previous.cleanup();
    for (const { name, value, priority } of previous.properties) {
      if (value) doc.documentElement.style.setProperty(name, value, priority);
      else doc.documentElement.style.removeProperty(name);
    }
    this.documents.delete(doc);
  }
  dispose() {
    this.disposed = true;
    for (const doc of this.documents.keys()) this.detach(doc);
  }
};

// src/main.ts
var SimpleBadgePlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.strings = getTranslations();
    this.revisions = /* @__PURE__ */ new WeakMap();
    this.presetModals = /* @__PURE__ */ new Set();
    this.active = false;
  }
  async onload() {
    this.strings = getTranslations((0, import_obsidian6.getLanguage)());
    this.presets = new PresetStore({ load: () => this.loadData(), save: (data) => this.saveData(data) }, this.strings);
    try {
      await this.presets.load();
    } catch (error) {
      this.loadError = error instanceof Error ? error.message : this.strings.loadFailed;
      new import_obsidian6.Notice(`Simple Badge: ${this.loadError}`);
    }
    this.active = true;
    this.fontSize = new BadgeFontSize(this.presets, this.app.workspace.containerEl.win);
    this.roundness = new BadgeRoundness(this.presets, this.app.workspace.containerEl.win);
    const appearance = this.appearance = new BadgeAppearance(this.fontSize.value, this.roundness.value);
    const attachWindows = () => {
      if (!this.active) return;
      appearance.attach(this.app.workspace.containerEl.ownerDocument);
      this.app.workspace.iterateAllLeaves((leaf) => appearance.attach(leaf.view.containerEl.ownerDocument));
    };
    attachWindows();
    this.app.workspace.onLayoutReady(attachWindows);
    this.registerEvent(this.app.workspace.on("window-open", (_workspaceWindow, win) => appearance.attach(win.document)));
    this.registerEvent(this.app.workspace.on("window-close", (_workspaceWindow, win) => appearance.detach(win.document)));
    this.register(this.fontSize.subscribe(() => {
      appearance.set(this.fontSize.value);
      if (this.fontSize.error) new import_obsidian6.Notice(this.fontSize.error);
    }));
    this.register(this.roundness.subscribe(() => {
      appearance.setRoundness(this.roundness.value);
      if (this.roundness.error) new import_obsidian6.Notice(this.roundness.error);
    }));
    this.register(() => appearance.dispose());
    this.settingsTab = new SimpleBadgeSettingTab(this.app, this);
    this.addSettingTab(this.settingsTab);
    this.registerEvent(this.app.workspace.on("editor-change", (editor) => {
      var _a;
      this.revisions.set(editor, ((_a = this.revisions.get(editor)) != null ? _a : 0) + 1);
    }));
    this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, info) => {
      const markdownView = info instanceof import_obsidian6.MarkdownView ? info : void 0;
      if (markdownView && markdownView.getMode() !== "source") return;
      const leaf = this.app.workspace.getMostRecentLeaf();
      const hostView = leaf == null ? void 0 : leaf.view;
      const target = captureEditorTarget(editor, info, () => {
        var _a;
        return this.active && (markdownView ? markdownView.getMode() === "source" && markdownView.containerEl.isConnected : !!hostView && (leaf == null ? void 0 : leaf.view) === hostView && hostView.containerEl.isConnected && ((_a = this.app.workspace.activeEditor) == null ? void 0 : _a.editor) === editor);
      }, () => {
        var _a;
        return (_a = this.revisions.get(editor)) != null ? _a : 0;
      });
      menu.addItem((item) => item.setTitle(this.strings.insertBadge).setIcon("tag").onClick(() => {
        var _a;
        if (!this.active) return;
        (_a = this.insertModal) == null ? void 0 : _a.close();
        const session = this.pendingSession;
        this.pendingSession = void 0;
        const modal = new BadgeInsertModal(this.app, this.presets, {
          isTargetValid: () => target.isValid(),
          insert: (badges) => insertBadges(editor, target.position, badges),
          relocate: (session2) => {
            this.pendingSession = session2;
            new import_obsidian6.Notice(this.strings.selectionPreserved);
          },
          close: () => {
            if (this.insertModal === modal) this.insertModal = void 0;
          }
        }, session);
        this.insertModal = modal;
        modal.open();
        appearance.attach(modal.modalEl.ownerDocument);
      }));
    }));
  }
  openPresetEditor(preset) {
    if (!this.active || this.loadError) return;
    const modal = new PresetEditModal(this.app, this.strings, preset, async (badge) => {
      if (!this.active) throw new Error(this.strings.pluginDisabled);
      if (preset) await this.presets.update(preset.id, badge);
      else await this.presets.add(badge);
    }, () => this.presetModals.delete(modal));
    this.presetModals.add(modal);
    modal.open();
    this.appearance.attach(modal.modalEl.ownerDocument);
  }
  openPresetImporter() {
    if (!this.active || this.loadError) return;
    const modal = new PresetImportModal(this.app, this.presets, (badges) => {
      if (!this.active) return Promise.reject(new Error(this.strings.pluginDisabled));
      return this.presets.addMany(badges);
    }, () => this.presetModals.delete(modal));
    this.presetModals.add(modal);
    modal.open();
    this.appearance.attach(modal.modalEl.ownerDocument);
  }
  onunload() {
    var _a, _b, _c, _d;
    this.active = false;
    (_a = this.fontSize) == null ? void 0 : _a.dispose();
    (_b = this.roundness) == null ? void 0 : _b.dispose();
    (_c = this.insertModal) == null ? void 0 : _c.close();
    for (const modal of this.presetModals) modal.close();
    (_d = this.settingsTab) == null ? void 0 : _d.hide();
    this.pendingSession = void 0;
  }
};

/* nosourcemap */