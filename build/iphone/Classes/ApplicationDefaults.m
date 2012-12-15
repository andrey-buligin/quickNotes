/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"zWOG3Qf86m5OcB0z7T6MCVLWLOwPWmpW"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"wDeJQlmQJdvnrioZ97tpDdKdHp6obNyH"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"l4OeoqPVymXVuBsHSnNyyLrDqGGQOICR"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"a3aPrUe4yxbBZgYj8GKjeRKgo953F9Jf"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"kuTnvUHSLCVteHTHPL4ZaSoHwbJ2luf4"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"DHhqU2EoFDihwT6rf9ybMCm02BxbS8vz"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
