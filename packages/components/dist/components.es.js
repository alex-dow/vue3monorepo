import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  props: {
    variant: {
      required: true,
      type: String
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, toDisplayString(_ctx.variant) + " - test", 1);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Button as CustomButton };
