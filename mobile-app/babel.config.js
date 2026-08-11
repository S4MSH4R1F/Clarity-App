module.exports = function (api) 
{ api.cache(true); 
    return { 
        presets: [ ["babel-preset-expo", { jsxImportSource: "nativewind" }],
         "nativewind/babel", ], 
         
         plugins: [ /* any other plugins you have, e.g. "react-native-reanimated/plugin" */ ],
        
        }; 
    };