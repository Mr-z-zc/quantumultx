{
  "id": "fokit.app.sub",
  "name": "FoKit 应用订阅",
  "author": "@FoKit",
  "icon": "https://avatars.githubusercontent.com/u/44187836",
  "repo": "https://github.com/FoKit",
  "apps": [
    {
      "id": "ql",
      "name": "数据同步",
      "author": "@FoKit",
      "descs_html": ["用于青龙和BoxJS之间的数据同步(自用脚本)"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/sync.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/sync.png"
      ],
      "scripts": [
        {
          "name": "青龙同步到BoxJS",
          "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/ql_to_boxjs"
        }
      ],
      "keys": [
        "@ql.ip",
        "@ql.client_id",
        "@ql.client_secret",
        "@ql.username",
        "@ql.password",
        "@ql.env",
        "@ql.mute",
        "@ql.is_pwd"
      ],
      "settings": [
        {
          "id": "@ql.mute",
          "name": "静默同步",
          "val": false,
          "type": "boolean",
          "desc": "同步时不会显示通知"
        },
        {
          "id": "@ql.is_pwd",
          "name": "使用密码登陆",
          "val": false,
          "type": "boolean",
          "desc": ""
        },
        {
          "id": "@ql.ip",
          "name": "Domains",
          "val": "",
          "type": "text",
          "placeholder": "ip:port"
        },
        {
          "id": "@ql.username",
          "name": "UserName",
          "val": "",
          "type": "text"
        },
        {
          "id": "@ql.password",
          "name": "PassWord",
          "val": "",
          "type": "text"
        },
        {
          "id": "@ql.client_id",
          "name": "Client ID",
          "val": "",
          "type": "text"
        },
        {
          "id": "@ql.client_secret",
          "name": "Client Secret",
          "val": "",
          "type": "text"
        }
      ]
    },
    {
      "id": "tools",
      "name": "Tools",
      "author": "@FoKit",
      "descs_html": ["自用工具"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/debug.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/debug.png"
      ],
      "scripts": [
        {
          "name": "reRequest",
          "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/reRequest.js"
        }
      ],
      "keys": ["reRequest", "_barkKey", "is_debug"],
      "settings": [
        {
          "id": "@reRequest.options",
          "name": "请求信息",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "Request options"
        },
        {
          "id": "@reRequest.count",
          "name": "请求次数",
          "val": "100",
          "type": "text",
          "desc": "Request count"
        },
        {
          "id": "@reRequest.wait",
          "name": "请求间隔",
          "val": "0",
          "type": "text",
          "desc": "Request wait (ms)"
        },
        {
          "id": "@reRequest.timeout",
          "name": "超时时间",
          "val": "0",
          "type": "text",
          "desc": "Request timeout (ms)"
        },
        {
          "id": "_barkKey",
          "name": "Bark key",
          "val": "",
          "type": "text",
          "placeholder": "",
          "desc": "Bark 通知 key"
        },
        {
          "id": "is_debug",
          "name": "Debug",
          "val": false,
          "type": "boolean",
          "desc": "Debug 模式"
        }
      ]
    },
    {
      "id": "jparking",
      "name": "捷停车",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jparking_sign.js",
      "descs_html": ["捷停车签到"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jparking.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jparking.png"
      ],
      "keys": ["jtc_userId"],
      "settings": [
        {
          "id": "jtc_userId",
          "name": "用户ID",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "placeholder": "userId1@userId2",
          "desc": "多个ID@隔开"
        }
      ]
    },
    {
      "id": "weibo",
      "name": "新浪微博",
      "author": "@sunert",
      "descs_html": [
        "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weibo_sign.js\">配置说明</a></h4>",
        "<br />",
        "<p>其中<font color='#FF0000',font-weight: bold>wb_nick</font>为账号昵称, 无需另外获取, 脚本运行可自动生成, wb_cookie为任务红包余额, 获取后方可显示, 可选, sy_token_wb为微博签到token, 必选</p>"
      ],
      "icons": [
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Alpha/weibo.png",
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Color/weibo.png"
      ],
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weibo_sign.js",
      "keys": ["sy_token_wb", "wb_cookie", "wb_nick"],
      "settings": [
        {
          "id": "sy_token_wb",
          "name": "Token",
          "val": "",
          "type": "text",
          "desc": "微博Token"
        },
        {
          "id": "wb_cookie",
          "name": "Cookie",
          "val": "",
          "type": "text",
          "desc": "微博Cookie"
        },
        {
          "id": "wb_nick",
          "name": "昵称",
          "val": "",
          "type": "text",
          "desc": "微博昵称"
        }
      ]
    },
    {
      "id": "wskey",
      "name": "京东WSKEY",
      "author": "@FoKit",
      "descs_html": ["用于自动抓取京东WSKEY"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jdjoy.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jdjoy.png"
      ],
      "keys": [
        "WSKEY_AUTO_UPLOAD",
        "WSKEY_TG_BOT_TOKEN",
        "WSKEY_TG_USER_ID",
        "wskeyList"
      ],
      "settings": [
        {
          "id": "WSKEY_AUTO_UPLOAD",
          "name": "自动提交WSKEY",
          "val": true,
          "type": "boolean",
          "desc": "启用后, 重写抓取的WSKEY会自动提交(上车)"
        },
        {
          "id": "WSKEY_TG_BOT_TOKEN",
          "name": "Telegram机器人Token",
          "val": "",
          "type": "text",
          "desc": "填写 Telegram 机器人的 Token, 格式: 123456:abcdefgabcdefgabcdefg"
        },
        {
          "id": "WSKEY_TG_USER_ID",
          "name": "Telegram 会话ID",
          "val": "",
          "type": "text",
          "desc": "填写 Telegram 会话ID: -1001701121614"
        },
        {
          "id": "wskeyList",
          "name": "京东WSKEY",
          "val": "",
          "type": "textarea",
          "autoGrow": false,
          "rows": 10,
          "desc": "京东WSKEY列表"
        }
      ]
    },
    {
      "id": "string_replace",
      "name": "字符串替换",
      "author": "@FoKit",
      "descs_html": ["字符串替换工具"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/default.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/default.png"
      ],
      "keys": ["string_replace", "string_replace_all"],
      "settings": [
        {
          "id": "string_replace",
          "name": "规则",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "示例: replace@text 多条规则以换行分隔"
        },
        {
          "id": "string_replace_all",
          "name": "全局规则",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "示例: replace@text 多条规则以换行分隔"
        }
      ]
    },
    {
      "id": "china_telecom",
      "name": "中国电信",
      "author": "@FoKit",
      "descs_html": ["中国电信 Cookie"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/china_telecom.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/china_telecom.png"
      ],
      "keys": ["china_telecom_cookie", "china_telecom_login_url"],
      "settings": [
        {
          "id": "china_telecom_cookie",
          "name": "Cookie",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "china_telecom_login_url",
          "name": "Login_url",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "feng.com",
      "name": "威锋论坛",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weifeng.js",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/Orz-3/mini/master/Alpha/feng.png",
        "https://raw.githubusercontent.com/Orz-3/mini/master/Color/feng.png"
      ],
      "keys": ["feng_username", "feng_password", "feng_token"],
      "settings": [
        {
          "id": "feng_username",
          "name": "账号",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "feng_password",
          "name": "密码",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "feng_token",
          "name": "Token",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "ThomasCook",
      "name": "托迈酷客",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/ThomasCook.js",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/ThomasCook.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/ThomasCook.png"
      ],
      "keys": ["ThomasCook_Cookie"],
      "settings": [
        {
          "id": "ThomasCook_Cookie",
          "name": "托迈酷客Cookie",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "iMaoTai",
      "name": "i茅台",
      "author": "@FoKit",
      "script": "",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/iMaoTai.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/iMaoTai.png"
      ],
      "keys": [
        "MT_TOKENS",
        "MT_PROVINCE",
        "MT_CITY",
        "MT_DISTRICT",
        "MT_ITEM_BLACK",
        "MT_VERSION",
        "MT_USERAGENT",
        "MT_R"
      ],
      "settings": [
        {
          "id": "MT_TOKENS",
          "name": "i茅台Token",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        },
        {
          "id": "MT_PROVINCE",
          "name": "省份",
          "val": "",
          "type": "text",
          "desc": "XX省 / 直辖市"
        },
        {
          "id": "MT_CITY",
          "name": "城市",
          "val": "",
          "type": "text",
          "desc": "XX市 / 直辖市"
        },
        {
          "id": "MT_DISTRICT",
          "name": "区域",
          "val": "",
          "type": "text",
          "desc": "xx区|xx区"
        },
        {
          "id": "MT_ITEM_BLACK",
          "name": "商品黑名单",
          "val": "",
          "type": "text",
          "desc": "2478|10056"
        },
        {
          "id": "MT_VERSION",
          "name": "APP版本号",
          "val": "",
          "type": "text",
          "desc": "x.x.x"
        },
        {
          "id": "MT_USERAGENT",
          "name": "用户标识",
          "val": "",
          "type": "text",
          "desc": "iOS;16.1.2;Apple;"
        },
        {
          "id": "MT_R",
          "name": "MT_R",
          "val": "",
          "type": "text",
          "desc": "clips_xxx"
        }
      ]
    },
    {
      "id": "MiSport",
      "name": "小米运动",
      "author": "@FoKit",
      "script": "",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/mi_sport.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/mi_sport.png"
      ],
      "keys": ["xmUsers", "xmPasswords", "xmMinStep", "xmMaxStep"],
      "settings": [
        {
          "id": "xmUsers",
          "name": "账号",
          "val": "",
          "placeholder": "13800138000&abc123@qq.con",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "多个账号使用&分隔"
        },
        {
          "id": "xmPasswords",
          "name": "密码",
          "val": "",
          "placeholder": "password1&password2",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "多个密码使用&分隔"
        },
        {
          "id": "xmMinStep",
          "name": "最小值",
          "val": "20000",
          "type": "text",
          "desc": "随机范围最小值"
        },
        {
          "id": "xmMaxStep",
          "name": "最大值",
          "val": "30000",
          "type": "text",
          "desc": "随机范围最大值"
        }
      ]
    },
    {
      "id": "buy_helper",
      "name": "购物助手",
      "author": "@FoKit",
      "script": "",
      "descs_html": [
        "用于京东、京喜和京喜特价京粉转链, 支持慢慢买、购物党和什么值得买跳转比价。"
      ],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jingfen.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jingfen.png"
      ],
      "keys": [
        "jd_unionId",
        "jd_positionId",
        "jtt_appid",
        "jtt_appkey",
        "buy_helper_LR",
        "buy_helper_zdm",
        "buy_helper_mmm",
        "buy_helper_gwd",
        "buy_helper_copy"
      ],
      "settings": [
        {
          "id": "jd_unionId",
          "name": "联盟 ID",
          "val": "",
          "type": "text",
          "placeholder": "",
          "desc": ""
        },
        {
          "id": "jd_positionId",
          "name": "推广位 ID",
          "val": "",
          "type": "text",
          "placeholder": "",
          "desc": "京东联盟推广位ID"
        },
        {
          "id": "jtt_appid",
          "name": "京推推 AppId",
          "val": "",
          "placeholder": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "jtt_appkey",
          "name": "京推推 AppKey",
          "val": "",
          "placeholder": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "buy_helper_LR",
          "name": "悬浮按键",
          "val": "left",
          "type": "radios",
          "desc": "悬浮按键显示位置",
          "items": [
            {
              "key": "left",
              "label": "左侧"
            },
            {
              "key": "right",
              "label": "右侧"
            }
          ]
        },
        {
          "id": "buy_helper_zdm",
          "name": "值得买",
          "val": true,
          "type": "boolean",
          "desc": ""
        },
        {
          "id": "buy_helper_mmm",
          "name": "慢慢买",
          "val": true,
          "type": "boolean",
          "desc": ""
        },
        {
          "id": "buy_helper_gwd",
          "name": "购物党",
          "val": true,
          "type": "boolean",
          "desc": ""
        },
        {
          "id": "buy_helper_copy",
          "name": "复制短链",
          "val": true,
          "type": "boolean",
          "desc": ""
        }
      ]
    },
    {
      "id": "jhsh",
      "name": "建行生活",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jhsh_checkIn.js",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jhsh.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jhsh.png"
      ],
      "keys": [
        "JHSH_GIFT",
        "JHSH_BODY",
        "JHSH_LOGIN_INFO",
        "JHSH_VERSION",
        "JHSH_SKIPDAY"
      ],
      "settings": [
        {
          "id": "JHSH_GIFT",
          "name": "奖励类型",
          "val": "2",
          "type": "radios",
          "desc": "选择连续签到奖励类型, 优先领取建行信用卡优惠券",
          "items": [
            {
              "key": "1",
              "label": "打车券"
            },
            {
              "key": "2",
              "label": "外卖券"
            },
            {
              "key": "3",
              "label": "骑行券"
            }
          ]
        },
        {
          "id": "JHSH_SKIPDAY",
          "name": "断签日",
          "val": "-1",
          "type": "selects",
          "items": [
            {
              "key": "-1",
              "label": "不断签"
            },
            {
              "key": "0",
              "label": "周日"
            },
            {
              "key": "1",
              "label": "周一"
            },
            {
              "key": "2",
              "label": "周二"
            },
            {
              "key": "3",
              "label": "周三"
            },
            {
              "key": "4",
              "label": "周四"
            },
            {
              "key": "5",
              "label": "周五"
            },
            {
              "key": "6",
              "label": "周六"
            }
          ],
          "desc": "断签日不执行签到任务"
        },
        {
          "id": "JHSH_BODY",
          "name": "签到数据",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        },
        {
          "id": "JHSH_LOGIN_INFO",
          "name": "登录数据",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        },
        {
          "id": "JHSH_VERSION",
          "name": "版本号",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "Hisense",
      "name": "海信爱家",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/Hisense.js",
      "descs_html": [""],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/hisense.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/hisense.png"
      ],
      "keys": ["HISENSE_CPS", "HISENSE_SWEIXIN"],
      "settings": [
        {
          "id": "HISENSE_CPS",
          "name": "签到数据",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "多账户用 @ 隔开"
        },
        {
          "id": "HISENSE_SWEIXIN",
          "name": "用户数据",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "多账户用 @ 隔开"
        }
      ]
    },
    {
      "id": "Geocaching",
      "name": "Geocaching",
      "author": "@FoKit",
      "script": "",
      "descs_html": ["用于自动翻译 Geocaching log。"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/geocaching.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/geocaching.png"
      ],
      "keys": [
        "geocaching_translate",
        "geocaching_gps_fix",
        "Geo_membershipTypeId",
        "BaiDu_APP_ID",
        "BaiDu_SECURITY_KEY",
        "BAIDU_TRANSLATE_TO_KEY",
        "geocaching_temp"
      ],
      "settings": [
        {
          "id": "geocaching_translate",
          "name": "百度翻译",
          "val": false,
          "type": "boolean",
          "desc": "开启后自动翻译 log / describe"
        },
        {
          "id": "geocaching_gps_fix",
          "name": "坐标修正",
          "val": true,
          "type": "boolean",
          "desc": "用于修复高德地图坐标偏移 WGS-84 -> GCJ-02"
        },
        {
          "id": "Geo_membershipTypeId",
          "name": "membershipTypeId",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "BaiDu_APP_ID",
          "name": "百度翻译 appid",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "BaiDu_SECURITY_KEY",
          "name": "百度翻译 securityKey",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "BAIDU_TRANSLATE_TO_KEY",
          "name": "翻译目标语言",
          "val": "zh",
          "type": "selects",
          "items": [
            {
              "key": "zh",
              "label": "中文(简体)"
            },
            {
              "key": "yue",
              "label": "中文(粤语)"
            },
            {
              "key": "cht",
              "label": "中文(繁体)"
            },
            {
              "key": "en",
              "label": "English - 英语"
            },
            {
              "key": "jp",
              "label": "日本語 - 日语"
            },
            {
              "key": "kor",
              "label": "한국어 - 韩语"
            },
            {
              "key": "fra",
              "label": "Français - 法语"
            },
            {
              "key": "de",
              "label": "Deutsch - 德语"
            },
            {
              "key": "spa",
              "label": "Español - 西班牙语"
            }
          ],
          "desc": ""
        },
        {
          "id": "geocaching_temp",
          "name": "缓存数据",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        }
      ]
    },
    {
      "id": "WxCode",
      "name": "Code Server",
      "author": "@FoKit",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/WeChat.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/WeChat.png"
      ],
      "keys": ["codeServer"],
      "settings": [
        {
          "id": "@codeServer.open",
          "name": "开启code模式",
          "val": false,
          "type": "boolean",
          "desc": "默认关闭"
        },
        {
          "id": "@codeServer.address",
          "name": "服务器地址",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "填入服务器地址, 不包括/, 如http://127.0.0.1"
        },
        {
          "id": "@codeServer.guid",
          "name": "实例 GUID",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "微信实例 GUID"
        },
        {
          "id": "@codeServer.password",
          "name": "接口密码",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "API 接口密码"
        },
        {
          "id": "@codeServer.fun",
          "name": "自定义函数",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "API 接口自定义函数"
        }
      ]
    },
    {
      "id": "YueRanHui",
      "name": "悦然荟",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/yueran_sign.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/yrh.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/yrh.png"
      ],
      "descs_html": [],
      "keys": ["yueranhui"],
      "settings": [
        {
          "id": "@yueranhui.appid",
          "name": "appid",
          "val": "",
          "type": "text",
          "desc": "悦然荟小程序 appid"
        },
        {
          "id": "@yueranhui.bid",
          "name": "bid",
          "val": "",
          "type": "text",
          "desc": "悦然荟小程序 bid"
        },
        {
          "id": "@yueranhui.version",
          "name": "version",
          "val": "",
          "type": "text",
          "desc": "悦然荟小程序 version"
        }
      ]
    },
    {
      "id": "huachenghui",
      "name": "花城汇",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/hch_sign.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/hch.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/hch.png"
      ],
      "descs_html": [],
      "keys": ["hch"],
      "settings": [
        {
          "id": "@hch.userid",
          "name": "userId",
          "val": "",
          "type": "text",
          "desc": "花城汇小程序 userId, 以数组形式保存"
        }
      ]
    },
    {
      "id": "10086_coupons",
      "name": "移动话费券",
      "author": "@FoKit",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/10086.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/10086.png"
      ],
      "descs_html": [],
      "keys": ["wx10086_token", "wx10086_count", "wx10086_wait"],
      "settings": [
        {
          "id": "wx10086_token",
          "name": "Token",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "活动 Token, 以数组字符串形式保存"
        },
        {
          "id": "wx10086_count",
          "name": "请求次数",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "wx10086_wait",
          "name": "间隔时间",
          "val": "",
          "type": "text",
          "desc": "单位 ms"
        }
      ]
    },
    {
      "id": "pp_parking",
      "name": "PP 停车",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/pp_parking.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/pp_parking.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/pp_parking.png"
      ],
      "descs_html": ["PP 停车每日任务"],
      "keys": ["pp_token"],
      "settings": [
        {
          "id": "pp_token",
          "name": "Token",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "活动 Token, 以数组字符串形式保存"
        }
      ]
    },
    {
      "id": "tuhu",
      "name": "途虎养车",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/tuhu.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/tuhu.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/tuhu.png"
      ],
      "descs_html": ["途虎养车签到"],
      "keys": ["tuhu_token", "tuhu_blackbox"],
      "settings": [
        {
          "id": "tuhu_token",
          "name": "Token",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": "活动 Token, 以数组字符串形式保存"
        },
        {
          "id": "tuhu_blackbox",
          "name": "Blackbox",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "livingmall",
      "name": "丽影云街",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/livingmall.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/livingmall.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/livingmall.png"
      ],
      "descs_html": ["丽影云街签到"],
      "keys": ["living_info"],
      "settings": [
        {
          "id": "living_info",
          "name": "用户信息",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        }
      ]
    },
    {
      "id": "wechat_pay_coupon",
      "name": "微信支付有优惠",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/wechat_pay_coupon.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/wechat_pay_coupon.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/wechat_pay_coupon.png"
      ],
      "descs_html": ["微信支付有优惠 - 领金币"],
      "keys": [
        "wechat_pay_token",
        "wechat_pay_version",
        "wechat_pay_exchange",
        "wechat_pay_exchange_award"
      ],
      "settings": [
        {
          "id": "wechat_pay_token",
          "name": "用户信息",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        },
        {
          "id": "wechat_pay_version",
          "name": "版本号",
          "val": "",
          "type": "text",
          "desc": ""
        },
        {
          "id": "wechat_pay_exchange",
          "name": "兑换好礼",
          "val": false,
          "type": "boolean",
          "desc": "兑换立减金"
        },
        {
          "id": "wechat_pay_exchange_award",
          "name": "兑换信息",
          "val": "",
          "type": "text",
          "desc": ""
        }
      ]
    },
    {
      "id": "aeon_sign",
      "name": "永旺 Aeon",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/aeon_sign.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/aeon.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/aeon.png"
      ],
      "descs_html": ["永旺 Aeon - 签到"],
      "keys": ["aeon_data"],
      "settings": [
        {
          "id": "aeon_data",
          "name": "用户信息",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        }
      ]
    },
    {
      "id": "tsl_sign",
      "name": "谢瑞麟 TSL",
      "author": "@FoKit",
      "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/tsl_sign.js",
      "repo": "",
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/tsl.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/tsl.png"
      ],
      "descs_html": ["谢瑞麟 TSL - 签到"],
      "keys": ["tsl_data"],
      "settings": [
        {
          "id": "tsl_data",
          "name": "用户信息",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        }
      ]
    }
  ]
}