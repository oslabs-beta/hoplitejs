<<<<<<< HEAD
import { SourceMapPayload } from 'node:module';
import { HopLiteUser, HopLiteRuleset } from '../types';

=======
import { SourceMapPayload } from "node:module";
import {  HopLiteUser,HopLiteRuleset} from "../types";
>>>>>>> 960a274fdae09f4f2f358b832ac23c85212b34b4
const jwt = require('jsonwebtoken');

// interface for error object
interface errorHandler {
  code: number;
  message: string;
}

interface payload {
  username: string;
  password: string;
  privilege: boolean;
}

class AuthenticationControllerBlueprint {
  authenticateCookie(hopLiteUser: HopLiteUser, ruleset: HopLiteRuleset, res: any) {
    console.log('authenticate fx is working');
    if (ruleset.cookie) {
      res.cookie('role', 'Admin').send('Cookie Set.');
    } else {
<<<<<<< HEAD
      throw new Error('Cookie not Set.');
=======
      throw new Error("Cookie not Set.");
>>>>>>> f373ed0ad39927db7b845f4657d577dee55caf4b
    }
  }
  authenticateJWT(ruleset: HopLiteRuleset, res: any) {
    
    console.log('JWT is working')
    if (ruleset.jwt) {
      const {payload, secret} = ruleset.jwt
      const token = jwt.sign(payload, secret)
      console.log(token);
<<<<<<< HEAD
      res.status(200).set({ auth: true, token });
    } else {
      throw new Error('JWT not Set.');
=======
      res.status(200).set({ auth: true, token: token });
    } else {
      throw new Error("JWT not Set.");
>>>>>>> f373ed0ad39927db7b845f4657d577dee55caf4b
    }
  }

  authenticate(ruleset: HopLiteRuleset, res: any) {
    // this method needs to set a cookie AND JWT combination
    if (ruleset.cookiejwt) {
      const { payload, secret, cookieKey } = ruleset.cookiejwt;
      const token = jwt.sign(payload, secret);
      console.log('this is our jwt', token);
      // console.log(payload)
      res.cookie(cookieKey, token).send('Cookie-JWT Set.');
    } else {
<<<<<<< HEAD
      throw new Error('Cannot set Cookie-JWT.');
=======
      throw new Error("Cannot set Cookie-JWT.");
>>>>>>> f373ed0ad39927db7b845f4657d577dee55caf4b
    }
  }
}

export {
  AuthenticationControllerBlueprint
<<<<<<< HEAD
};
=======
}
>>>>>>> f373ed0ad39927db7b845f4657d577dee55caf4b
