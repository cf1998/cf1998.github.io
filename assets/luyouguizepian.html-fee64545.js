import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, e as createVNode, a as createStaticVNode } from "./app-53847742.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="traefik-路由规则" tabindex="-1"><a class="header-anchor" href="#traefik-路由规则" aria-hidden="true">#</a> Traefik 路由规则</h2><p>首先，当部署完后启动 Traefik 时，定义了入口点（端口号和对应的端口名称），然后 Kubernetes 集群外部就可以通过访问 Traefik 服务器地址和配置的入口点对 Traefik 服务进行访问，在访问时一般会带上 “域名” + “入口点端口”，然后 Traefik 会根据域名和入口点端口在 Traefik 路由规则表中进行匹配，如果匹配成功，则将流量发送到 Kubernetes 内部应用中与外界进行交互。这里面的域名与入口点与对应后台服务关联的规则，即是 Traefik 路由规则。 Traefik 创建路由规则有多种方式：</p><ul><li>原生 Ingress 写法</li><li>使用 CRD IngressRoute 方式</li><li>使用 GatewayAPI 的方式（本节不介绍）</li></ul><p>相较于原生 Ingress 写法，ingressRoute 是 2.1 以后新增功能，简单来说，他们都支持路径 (path) 路由和域名 (host) HTTP 路由，以及 HTTPS 配置，区别在于 IngressRoute 需要定义 CRD 扩展，但是它支持了 TCP、UDP 路由以及中间件等新特性，强烈推荐使用 ingressRoute</p><h2 id="ingress方式" tabindex="-1"><a class="header-anchor" href="#ingress方式" aria-hidden="true">#</a> ingress方式</h2><p>ingress-app.yaml：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ingress-app\nspec:\n  replicas: <span class="token number">1</span>\n  selector:\n    matchLabels:\n      app: ingress-app\n  template:\n    metadata:\n      labels:\n        app: ingress-app\n    spec:\n      containers:\n        - name: ingress-app\n          image: nginx:latest\n          lifecycle:\n            postStart:\n              exec:\n                command:  <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;echo Hello ingress app &gt; /usr/share/nginx/html/index.html&quot;</span><span class="token punctuation">]</span>\n          ports:\n            - containerPort: <span class="token number">80</span>\n          resources:\n            requests:\n              cpu: 100m\n              memory: 128Mi\n            limits:\n              cpu: 200m\n              memory: 256Mi\n   \n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ingress-app\nspec:\n  selector:\n    app: ingress-app\n  ports:\n    - name: http\n      port: <span class="token number">80</span>\n      targetPort: <span class="token number">80</span>\n  type: ClusterIP\n   \n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-app\nspec:\n  rules:\n    - host: ingress.kubesre.lc\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: ingress-app\n                port:\n                  name: http\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署查看效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f  ingress-app.yaml </span>\ndeployment.apps/ingress-app created\nservice/ingress-app created\ningress.networking.k8s.io/ingress-app created\n \n \n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get pod,svc,ingress</span>\nNAME                               READY   STATUS    RESTARTS   AGE\npod/ingress-app-578bb77b97-ps9q9   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          24s\n \nNAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE\nservice/ingress-app   ClusterIP   <span class="token number">10.100</span>.253.185   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP    24s\nservice/kubernetes    ClusterIP   <span class="token number">10.96</span>.0.1        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP   118d\n \nNAME                                    CLASS     HOSTS                ADDRESS   PORTS   AGE\ningress.networking.k8s.io/ingress-app   traefik   ingress.kubesre.lc             <span class="token number">80</span>      24s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加本地hosts解析</p><blockquote><p>本地集群部署了Metallb负载均衡服务，可直接使用LoadBalancer地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.36.139 ingress.kubesre.lc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 12);
const _hoisted_13 = {
  href: "http://ingress.kubesre.lc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p><img src="https://img.kubesre.com/kubesre/20230829/1.png" alt="image.png"></p><h2 id="ingressroute方式" tabindex="-1"><a class="header-anchor" href="#ingressroute方式" aria-hidden="true">#</a> ingressRoute方式</h2><p>ingressroute-app.yaml：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ingressroute-app\nspec:\n  replicas: <span class="token number">1</span>\n  selector:\n    matchLabels:\n      app: ingressroute-app\n  template:\n    metadata:\n      labels:\n        app: ingressroute-app\n    spec:\n      containers:\n        - name: ingressroute-app\n          image: nginx:latest\n          lifecycle:\n            postStart:\n              exec:\n                command:  <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;echo Hello ingressroute app &gt; /usr/share/nginx/html/index.html&quot;</span><span class="token punctuation">]</span>\n          ports:\n            - containerPort: <span class="token number">80</span>\n          resources:\n            requests:\n              cpu: 100m\n              memory: 128Mi\n            limits:\n              cpu: 200m\n              memory: 256Mi\n   \n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ingressroute-app\nspec:\n  selector:\n    app: ingressroute-app\n  ports:\n    - name: http\n      port: <span class="token number">80</span>\n      targetPort: <span class="token number">80</span>\n  type: ClusterIP\n   \n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app\nspec:\n  entryPoints:\n  - web\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>ingressroute.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token comment"># 域名</span>\n    kind: Rule\n    services:\n      - name: ingressroute-app  <span class="token comment"># 与svc的name一致</span>\n        port: <span class="token number">80</span>                <span class="token comment"># 与svc的port name一致</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署查看效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f  ingressroute-app.yaml</span>\ndeployment.apps/ingressroute-app created\nservice/ingressroute-app created\ningressroute.traefik.containo.us/ingressroute-app created\n \n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod,svc,ingressroute</span>\nNAME                                    READY   STATUS    RESTARTS   AGE\npod/ingressroute-app-64c6b5bd86-dqr2j   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          94s\n \nNAME                       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE\nservice/ingressroute-app   ClusterIP   <span class="token number">10.103</span>.84.46     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP    94s\n \nNAME                                                AGE\ningressroute.traefik.containo.us/ingressroute-app   94s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加本地hosts解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.36.139 ingressroute.kubesre.lc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 8);
const _hoisted_22 = {
  href: "http://ingressroute.kubesre.lc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://img.kubesre.com/kubesre/20230829/1.png",
      alt: "image.png"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "匹配规则",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#匹配规则",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 匹配规则")
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "更多匹配规则如下",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "规则"),
      /* @__PURE__ */ createBaseVNode("th", null, "描述")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "Headers(key, value)"),
    /* @__PURE__ */ createBaseVNode("td", null, "检查headers中是否有一个键为key值为value的键值对")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "HeadersRegexp(key, regexp)"),
    /* @__PURE__ */ createBaseVNode("td", null, "检查headers中是否有一个键位key值为正则表达式匹配的键值对")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = {
  href: "http://example.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "检查请求的域名是否包含在特定的域名中",
  -1
  /* HOISTED */
);
const _hoisted_31 = {
  href: "http://example.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = {
  href: "http://example.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "td",
  null,
  "检查请求的域名是否包含在特定的正则表达式域名中",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "Method(GET, …)"),
    /* @__PURE__ */ createBaseVNode("td", null, "检查请求方法是否为给定的methods(GET、POST、PUT、DELETE、PATCH)中")
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "Path(/path, /articles/{cat:[a-z]+}/{id:[0-9]+}, …)"),
    /* @__PURE__ */ createBaseVNode("td", null, "匹配特定的请求路径，它接受一系列文字和正则表达式路径")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "PathPrefix(/products/, /articles/{cat:[a-z]+}/{id:[0-9]+})"),
    /* @__PURE__ */ createBaseVNode("td", null, "匹配特定的前缀路径，它接受一系列文字和正则表达式前缀路径")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "Query(foo=bar, bar=baz)"),
    /* @__PURE__ */ createBaseVNode("td", null, "匹配查询字符串参数，接受key=value的键值对")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "tr",
  null,
  [
    /* @__PURE__ */ createBaseVNode("td", null, "ClientIP(10.0.0.0/16, ::1)"),
    /* @__PURE__ */ createBaseVNode("td", null, "如果请求客户端 IP 是给定的 IP/CIDR 之一，则匹配。它接受 IPv4、IPv6 和网段格式。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app\nspec:\n  entryPoints:\n  - web\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>ingressroute.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Headers<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>X-Custom-Header<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>special-value<span class="token variable">`</span></span><span class="token punctuation">)</span>\n    kind: Rule\n    services:\n      - name: ingressroute-app\n        port: <span class="token number">80</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，IngressRoute 匹配具有以下条件的请求：</p>', 3);
const _hoisted_42 = {
  href: "http://ingressroute.kubesre.lc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "该请求包含一个 X-Custom-Header 值为 的自定义标头 special-value。",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<p>如果传入请求满足这些条件，Traefik 会将请求路由到端口 80 上指定的服务ingressroute-ap，Headers 区分大小写。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl -H &quot;Host: ingressroute.kubesre.lc&quot; -H &quot;X-Custom-Header: special-value&quot; http://ingressroute.kubesre.lc</span>\nHello ingressroute app\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app\nspec:\n  entryPoints:\n  - web\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>ingressroute.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Path<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>/<span class="token variable">`</span></span><span class="token punctuation">)</span>\n    kind: Rule\n    services:\n      - name: ingressroute-app\n        port: <span class="token number">80</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4);
const _hoisted_48 = {
  href: "http://ingressroute.kubesre.lc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl -H &quot;Host: ingressroute.kubesre.lc&quot; http://ingressroute.kubesre.lc/</span>\nHello ingressroute app\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app\nspec:\n  entryPoints:\n  - web\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>ingressroute.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Method<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>GET<span class="token variable">`</span></span><span class="token punctuation">)</span>\n   kind: Rule\n    services:\n      - name: ingressroute-app\n        port: <span class="token number">80</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_52 = {
  href: "http://ingressroute.kubesre.lc",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl -XGET -H &quot;Host: ingressroute.kubesre.lc&quot; http://ingressroute.kubesre.lc/    </span>\nHello ingressroute app\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置https" tabindex="-1"><a class="header-anchor" href="#配置https" aria-hidden="true">#</a> 配置Https</h2><p>自签名证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-keyout</span> tls.key <span class="token parameter variable">-out</span> tls.crt <span class="token parameter variable">-subj</span> <span class="token string">&quot;/CN=ingressroute.kubesre.lc&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 tls 类型的 secret</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create secret tls myapp-tls <span class="token parameter variable">--cert</span><span class="token operator">=</span>tls.crt <span class="token parameter variable">--key</span><span class="token operator">=</span>tls.key\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 https的 ingressRoute ingressroute-app-https.yaml：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app-https\nspec:\n  entryPoints:\n  - websecure\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>ingressroute.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token comment"># 域名</span>\n    kind: Rule\n    services:\n      - name: ingressroute-app <span class="token comment"># 与svc的name一致</span>\n        port: <span class="token number">80</span>               <span class="token comment"># 与svc的port name一致</span>\n  tls:\n    secretName: myapp-tls <span class="token comment"># 指定tls证书名称</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f  ingressroute-app-https.yaml</span>\ningressroute.traefik.containo.us/example-ingressroute-https created  \n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ingressroute</span>\nNAME                     AGE\ningressroute-app         8m57s\ningressroute-app-https   2s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 10);
const _hoisted_63 = {
  href: "https://ingressroute.kubesre.lc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://cdn.nlark.com/yuque/0/2023/png/240522/1692694760337-e4adc79b-af5e-4b04-9dc7-84deec153941.png#averageHue=%23d4c2ae&clientId=uc5646cc9-c765-4&from=paste&height=99&id=u1b66ffd5&originHeight=89&originWidth=454&originalType=binary&ratio=0.8999999761581421&rotation=0&showTitle=false&size=13265&status=done&style=none&taskId=uc45c956c-f24d-4e51-bca6-892fa20e55d&title=&width=504.444457807659",
    alt: "image.png"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createStaticVNode('<h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: ingressroute-app-lb\nspec:\n  entryPoints:\n  - web              <span class="token comment"># 与 configmap 中定义的 entrypoint 名字相同</span>\n  routes:\n  - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>lb.kubesre.lc<span class="token variable">`</span></span><span class="token punctuation">)</span> <span class="token comment"># 域名</span>\n    kind: Rule\n    services:\n      - name: ingress-app       <span class="token comment"># 与svc的name一致</span>\n        port: <span class="token number">80</span>                <span class="token comment"># 与svc的port一致</span>\n      - name: ingressroute-app  <span class="token comment"># 与svc的name一致</span>\n        port: <span class="token number">80</span>                <span class="token comment"># 与svc的port一致</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f  ingressroute-app-lb.yaml   </span>\ningressroute.traefik.containo.us/ingressroute-app-lb created\n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ingressroute</span>\nNAME                     AGE\ningressroute-app         13m\ningressroute-app-https   5m2s\ningressroute-app-lb      27s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加本地hosts解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.36.139 lb.kubesre.lc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问测试，可以发现 ingress-app 和 ingressroute-app 的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl http://lb.kubesre.lc/</span>\nHello ingressroute app\n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl http://lb.kubesre.lc/</span>\nHello ingress app\n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl http://lb.kubesre.lc/</span>\nHello ingressroute app\n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl http://lb.kubesre.lc/</span>\nHello ingress app\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("访问 "),
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("http://ingress.kubesre.lc/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createTextVNode("访问 "),
      createBaseVNode("a", _hoisted_22, [
        createTextVNode("http://ingressroute.kubesre.lc/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    createBaseVNode("table", null, [
      _hoisted_26,
      createBaseVNode("tbody", null, [
        _hoisted_27,
        _hoisted_28,
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createTextVNode("Host("),
            createBaseVNode("a", _hoisted_29, [
              createTextVNode("example.com"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode(", …)")
          ]),
          _hoisted_30
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createTextVNode("HostRegexp("),
            createBaseVNode("a", _hoisted_31, [
              createTextVNode("example.com"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode(", {subdomain:[a-z]+}."),
            createBaseVNode("a", _hoisted_32, [
              createTextVNode("example.com"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode(", …)")
          ]),
          _hoisted_33
        ]),
        _hoisted_34,
        _hoisted_35,
        _hoisted_36,
        _hoisted_37,
        _hoisted_38
      ])
    ]),
    _hoisted_39,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("主机头是 "),
        createBaseVNode("a", _hoisted_42, [
          createTextVNode("ingressroute.kubesre.lc"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _hoisted_43
    ]),
    _hoisted_44,
    createBaseVNode("p", null, [
      createTextVNode("在这个例子中，IngressRoute 配置会匹配 "),
      createBaseVNode("a", _hoisted_48, [
        createTextVNode("ingressroute.kubesre.lc"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 域名下的特定 URL 路径模式。URL 路径的模式是 / 测试访问如下：")
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      createTextVNode("在这个例子中，IngressRoute 配置会匹配 "),
      createBaseVNode("a", _hoisted_52, [
        createTextVNode("ingressroute.kubesre.lc"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 域名下的使用 GET 方法的 HTTP 请求。")
    ]),
    _hoisted_53,
    createBaseVNode("p", null, [
      createTextVNode("访问 "),
      createBaseVNode("a", _hoisted_63, [
        createTextVNode("https://ingressroute.kubesre.lc/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，此时 http 和 https 站点共存 "),
      _hoisted_64
    ]),
    _hoisted_65
  ]);
}
const luyouguizepian_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "luyouguizepian.html.vue"]]);
export {
  luyouguizepian_html as default
};
