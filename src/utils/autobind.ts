export const Autobind = () => {
  return (constructor: Function) => {
    // get the list of keys of the class prototype
    const keys = Object.getOwnPropertyNames(constructor.prototype);

    keys.forEach((key) => {
      const originalMethod = constructor.prototype[key];

      // check if the property is a function and not the constructor itself
      if (key !== "constructor" && typeof originalMethod === "function") {
        // redefine the method with it bound to the class instance
        Object.defineProperty(constructor.prototype, key, {
          configurable: true,
          enumerable: false,
          get() {
            return originalMethod.bind(this);
          },
        });
      }
    });
  };
};
