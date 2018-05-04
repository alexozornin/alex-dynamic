'use strict'

const util = require('util')

module.exports = class Dynamic
{
    constructor()
    {
        this.functions = {};
    }

    addfunction(key, f)
    {
        this.functions[key] = f;
    }

    removefunction(key)
    {
        delete this.functions[key];
    }

    hasfunction(key)
    {
        if(key in this.functions)
        {
            return true;
        }
        return false;
    }

    execute(key, args)
    {
        return this.functions[key](args);
    }
}
