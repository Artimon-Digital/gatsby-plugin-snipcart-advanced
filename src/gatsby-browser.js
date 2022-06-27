const React = require("react");
const SnipcartProvider = require("./components/SnipcartProvider").default;
const Script = require('gatsby').Script;

/**
 * wrapp app with provider for dispatch cart and customer infos
 */
exports.wrapRootElement = ({element}, pluginOptions = {}) => {
  const _options = {
    ...{
      version: "3.0.29",
      locales: {},
      defaultLang: "en",
    },
    ...pluginOptions,
  };
  return (
    <SnipcartProvider {..._options}>
      {element}
      <Script
      key="snipcart-script"
      src={`https://cdn.snipcart.com/themes/v${_options.version}/default/snipcart.js`}
      />
    </SnipcartProvider>
  );
};
