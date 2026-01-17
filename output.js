//Sat Jan 17 2026 13:55:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { t as _0x5424cc, c as _0x27610e, a as _0x19bcb8, h as _0x1797e7 } from "./vendor-modules-CfZ9dqFE.js";
function k(_0x2e97c9) {
  return new Worker("/assets/worker-C8pYnBko.js", {
    name: _0x2e97c9 == null ? undefined : _0x2e97c9.name
  });
}
async function $(_0x2f1144, _0x327535) {
  const _0x516c69 = [94, 83, 76, 56, 60];
  const _0x21c320 = [83, 88, 76, 78];
  const _0x2682d8 = _0x516c69.map(_0x5d3965 => String.fromCharCode(_0x5d3965 - 11)).join("");
  const _0x5bea30 = _0x21c320.map(_0x1a6980 => String.fromCharCode(_0x1a6980 - 11)).join("");
  const _0x5a63d3 = new TextEncoder();
  const _0x10095c = await crypto.subtle.importKey("raw", _0x5a63d3.encode(_0x327535), {
    name: _0x5bea30,
    hash: _0x2682d8
  }, false, ["sign"]);
  const _0x4c1970 = await crypto.subtle.sign(_0x5bea30, _0x10095c, _0x5a63d3.encode(_0x2f1144));
  let _0xde24a2 = Array.from(new Uint8Array(_0x4c1970), _0x3e9bcf => _0x3e9bcf.toString(16).padStart(2, "0")).join("");
  const _0xb5792b = _0xde24a2.match(/.{8}/g) || [];
  const _0x304697 = 23100;
  _0xde24a2 = _0xb5792b.map(_0x5818da => {
    let _0x54a890 = parseInt(_0x5818da, 16);
    _0x54a890 ^= _0x304697;
    _0x54a890 = (_0x54a890 << 3 | _0x54a890 >>> 29) >>> 0;
    return _0x54a890.toString(16).padStart(8, "0");
  }).join("");
  return _0xde24a2;
}
async function b(_0xe96408, _0x2da14a) {
  return new Promise((_0x45f3c8, _0x4d6adf) => {
    const _0x3cd867 = new k();
    _0x3cd867.postMessage(_0xe96408 + " " + _0x2da14a);
    _0x3cd867.onmessage = _0x4920e3 => {
      _0x3cd867.terminate();
      _0x45f3c8(_0x4920e3.data);
    };
    _0x3cd867.onerror = _0x4d6adf;
  });
}
function M(_0x35b5bd) {
  const _0x46ecc7 = _0x35b5bd.toString();
  let _0xa7befc = 2166136261;
  for (let _0x4c55f7 = 0; _0x4c55f7 < _0x46ecc7.length; _0x4c55f7++) {
    _0xa7befc ^= _0x46ecc7.charCodeAt(_0x4c55f7);
    _0xa7befc = _0xa7befc * 16777619 >>> 0;
    _0xa7befc = (_0xa7befc << 13 | _0xa7befc >>> 19) >>> 0;
  }
  const _0x40a7c0 = _0xa7befc.toString(16).padStart(8, "0");
  const _0x374817 = ["_x70", "_hsh", "_enc", "_sig", "_aut"];
  const _0x25b676 = _0x374817[_0xa7befc % _0x374817.length];
  return "0x" + _0x40a7c0 + _0x25b676;
}
function T(..._0x37504c) {
  return _0x5424cc(_0x27610e(_0x37504c));
}
function H() {
  return navigator.userAgent.includes("MicroMessenger");
}
function x() {
  const _0x356912 = "XMMX_FINGERPRINT";
  let _0x1d267a = localStorage.getItem(_0x356912);
  _0x1d267a || (_0x1d267a = new _0x19bcb8.ClientJS().getFingerprint().toString(), localStorage.setItem(_0x356912, _0x1d267a));
  return _0x1d267a;
}
async function A() {
  const _0x461b2f = [92, 51, 123];
  const _0x449fcc = 3;
  const _0x361447 = _0x461b2f.map(_0x72cd1c => String.fromCharCode(_0x72cd1c ^ _0x449fcc)).join("");
  const _0x4ba8b0 = Math.floor(Date.now() / 1000);
  const _0x262e45 = x();
  const _0x39a360 = "" + _0x4ba8b0 + _0x262e45;
  const _0x39be1d = await $(_0x39a360, _0x361447);
  const _0x586e27 = await b(_0x39be1d, _0x262e45);
  return {
    "x-auth-hash": _0x586e27,
    "x-timestamp": _0x4ba8b0.toString(),
    "x-fingerprint": _0x262e45
  };
}
function E(_0x1bbf4a) {
  try {
    const _0x4d9e83 = new Date(_0x1bbf4a);
    const _0x291e32 = (new Date().getTime() - _0x4d9e83.getTime()) / 3600000;
    return _0x291e32 < 1 ? Math.floor(_0x291e32 * 60) + "分钟前" : _0x291e32 < 24 ? Math.floor(_0x291e32) + "小时前" : _0x4d9e83.toLocaleDateString("zh-CN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "刚刚";
  }
}
const o = I();
function I() {
  return _0x1797e7("https://api.xiaommx.cn/", {
    headers: A
  });
}
const _ = {
  async recordVisit() {
    return (await o.stats.visit.$post({})).json();
  },
  async like() {
    return (await o.stats.like.$post({})).json();
  },
  async recordGamePlayCount(_0x3a92b1) {
    return (await o.stats["play-count"].$post({
      json: {
        gameId: _0x3a92b1
      }
    })).json();
  },
  async getGamePlayCount(_0x22c91d) {
    return (await o.stats["play-count"].$get({
      query: {
        gameId: _0x22c91d
      }
    })).json();
  }
};
const P = {
  async startGameSession() {
    return (await o["no-use"]["library-itch"]["start-session"].$post({})).json();
  },
  async submitScore(_0x3da18e, _0x12b6c8, _0xc58650, _0x26a813) {
    const _0x2c0392 = {
      score: _0x3da18e,
      nickname: _0x26a813,
      token: _0x12b6c8,
      clientGameTime: _0xc58650
    };
    return (await o["no-use"]["library-itch"]["submit-score"].$post({
      json: _0x2c0392
    })).json();
  },
  async getLeaderboard() {
    return (await o["no-use"]["library-itch"].leaderboard.$get({})).json();
  }
};
const R = {
  async submitScore(_0x4f95e5, _0xeb82ae, _0x542bbd) {
    const _0x37584e = {
      level: _0x4f95e5,
      drawPath: _0xeb82ae,
      nickname: _0x542bbd
    };
    return (await o["no-use"]["geek-game"].score.$post({
      json: _0x37584e
    })).json();
  },
  async getLeaderboard(_0x3b9954) {
    return (await o["no-use"]["geek-game"].leaderboard.$get({
      query: {
        level: String(_0x3b9954)
      }
    })).json();
  }
};
const G = {
  async record(_0xf15b25) {
    return (await o["no-use"]["poo-tracker"].record.$post({
      json: {
        pooped: _0xf15b25
      }
    })).json();
  },
  async getStats() {
    return (await o["no-use"]["poo-tracker"].stats.$get({})).json();
  },
  async getLeaderboard() {
    return (await o["no-use"]["poo-tracker"].leaderboard.$get({})).json();
  }
};
export { _ as a, R as b, T as c, E as f, M as g, H as i, P as l, G as p };