declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.json5" {
  const value: any;
  export default value;
}

declare module "*.yaml" {
  const value: any;
  export default value;
}
