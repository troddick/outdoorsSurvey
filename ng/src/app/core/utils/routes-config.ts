import { Injectable } from '@angular/core';

@Injectable()
export class CONFIG {
    public static get Person() {
        return {
            persons: { url: '/persons' }
        }
    }
    public static get Season() {
        return {
            seasons: { url: '/seasons'}
        }
    }
    public static get Location() {
        return {
            locations: { url: '/locations'}
        }
    }
    public static get Activity() {
        return {
            activities: { url: '/activities'}
        }
    }
}
