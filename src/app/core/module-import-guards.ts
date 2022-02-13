/**
 * guard to prevent reimporting core module in other modules
 * only app module that could import the core module.
 *
 * for more info please check this link {@link https://angular.io/guide/styleguide#style-04-12}.
 * @param parentModule
 * @param {string} moduleName
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}