import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, e as createVNode, a as createStaticVNode } from "./app-45f9d385.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://mp.weixin.qq.com/s/zTspv5ajz3lyQ9n7KXMf7w",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress-controllers/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "traefik-简介",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#traefik-简介",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Traefik 简介")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://github.com/traefik/traefik",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://doc.traefik.io/traefik/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="流量示意图" tabindex="-1"><a class="header-anchor" href="#流量示意图" aria-hidden="true">#</a> 流量示意图</h2><p>以下为官方示意图 <img src="https://img.kubesre.com/kubesre/20230824/1.png" alt=""></p><p><img src="https://img.kubesre.com/kubesre/20230824/2" alt=""></p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>从上面图得知，当请求Traefik时，请求首先到entrypoints，然后分析传入的请求，查看他们是否与定义的Routers匹配。如果匹配，则会通过一系列middlewares处理，再到traefikServices上做流量转发，最后请求到kubernetes的services上。 Traefik 基于入口点、路由器、中间件和服务的概念：</p><ul><li>Providers：基础组件，监听路由信息变化，更新路由，类似修改完nginx配置，reload服务</li><li>Entrypoints：网络的入口点，监听传入的流量，类似nginx的配置文件listen指定监听端口</li><li>Routers：分析请求(host,path,headers,SSL等)，匹配规则，类似nginx的配置文件server_name+location</li><li>Middlewares：中间件，用来修改请求或者根据请求来做出判断，类似nginx的配置文件，location配置段中添加的缓存、压缩、请求头等配置</li><li>Service：将请求转发给应用，负责配置如何最终将处理传入请求的实际服务，Traefik的Service介于Middlewares与KubernetesService之间，可以实现加权负载、流量复制等功能，类似于nginx配置中http配置段中的upstream</li></ul><h2 id="与-nginx-ingress对比" tabindex="-1"><a class="header-anchor" href="#与-nginx-ingress对比" aria-hidden="true">#</a> 与 Nginx-Ingress对比</h2><p><strong>nginx-ingress</strong>：</p><p>使用nginx作为前端负载均衡，通过ingress controller不断的和kubernetes api交互，实时获取后端service，pod等的变化，然后动态更新nginx配置，并刷新使配置生效，达到服务发现的目的。</p><p><strong>traefik</strong>：traefik本身设计的就能够实时跟kubernetes api交互，感知后端service，pod等的变化，自动更新配置并重载。</p><h2 id="traefik优点" tabindex="-1"><a class="header-anchor" href="#traefik优点" aria-hidden="true">#</a> traefik优点</h2><ul><li>不需要安装其他依赖，使用 GO 语言编译可执行文件</li><li>支持多种后台，如 Docker, Swarm mode, Kubernetes, Marathon, Consul, Etcd, Rancher, Amazon ECS 等等</li><li>支持 REST API</li><li>配置文件热重载，可自动监听配置改动、发现新服务，并自动更新无需人工重启</li><li>支持熔断、限流功能</li><li>支持轮训、负载均衡</li><li>提供简洁的 UI 界面</li><li>支持 Websocket, HTTP/2, GRPC</li><li>自动更新 HTTPS 证书</li><li>支持高可用集群模式</li></ul><h2 id="安装-traefik" tabindex="-1"><a class="header-anchor" href="#安装-traefik" aria-hidden="true">#</a> 安装 Traefik</h2><p>官方提供以下几种方式来安装Traefik：</p>', 14);
const _hoisted_20 = {
  href: "https://doc.traefik.io/traefik/getting-started/install-traefik/#use-the-official-docker-image",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = {
  href: "https://doc.traefik.io/traefik/getting-started/install-traefik/#use-the-helm-chart",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = {
  href: "https://doc.traefik.io/traefik/getting-started/install-traefik/#use-the-binary-distribution",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = {
  href: "https://doc.traefik.io/traefik/getting-started/install-traefik/#compile-your-binary-from-the-sources",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>本篇将使用 Helm 来安装 Traefik。 确保满足以下要求：</p><ul><li>Kubernetes 1.16+</li><li>Helm version 3.9+</li></ul><p>环境说明：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>\nNAME                    STATUS   ROLES                  AGE    VERSION\nlocalhost.localdomain   Ready    control-plane,master   1d     v1.22.10\n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># helm version    </span>\nversion.BuildInfo<span class="token punctuation">{</span>Version:<span class="token string">&quot;v3.11.3&quot;</span>, GitCommit:<span class="token string">&quot;323249351482b3bbfc9f5004f65d400aa70f9ae7&quot;</span>, GitTreeState:<span class="token string">&quot;clean&quot;</span>, GoVersion:<span class="token string">&quot;go1.20.3&quot;</span><span class="token punctuation">}</span>\n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="metallb负载均衡器部署" tabindex="-1"><a class="header-anchor" href="#metallb负载均衡器部署" aria-hidden="true">#</a> MetalLB负载均衡器部署</h2><p>为了实现在本地集群中能够使用服务类型为LoadBalancer的服务，我们将部署metallb来实现，至于metallb的实现原理，本章不会详细讲解，有兴趣的童鞋可以自行研究 提前安装metallb服务，使traefik svc可以使用LoadBalancer的服务</p><h3 id="helm安装-metallb" tabindex="-1"><a class="header-anchor" href="#helm安装-metallb" aria-hidden="true">#</a> Helm安装 metallb</h3>', 7);
const _hoisted_31 = {
  href: "https://metallb.universe.tf/installation/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl create ns metallb-system</span>\n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># helm repo add metallb https://metallb.github.io/metallb</span>\n<span class="token string">&quot;metallb&quot;</span> has been added to your repositories\n \n<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># helm install -n metallb-system metallb metallb/metallb</span>\nNAME: metallb\nLAST DEPLOYED: Mon Aug <span class="token number">21</span> <span class="token number">16</span>:51:37 <span class="token number">2023</span>\nNAMESPACE: metallb-system\nSTATUS: deployed\nREVISION: <span class="token number">1</span>\nTEST SUITE: None\nNOTES:\nMetalLB is now running <span class="token keyword">in</span> the cluster.\n \nNow you can configure it via its CRs. Please refer to the metallb official docs\non how to use the CRs.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看pod</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n metallb-system</span>\nNAME                                  READY   STATUS    RESTARTS       AGE\nmetallb-controller-77bbffbc7b-jr78f   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>1d ago<span class="token punctuation">)</span>     1d\nmetallb-speaker-7pqhj                 <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>1d ago<span class="token punctuation">)</span>     1d\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layer-2-模式配置" tabindex="-1"><a class="header-anchor" href="#layer-2-模式配置" aria-hidden="true">#</a> Layer 2 模式配置</h3><p>配置ip池</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: default\n  namespace: metallb-system\nspec:\n  addresses:\n  - <span class="token number">192.168</span>.36.139.139-192.168.36.200  <span class="token comment"># 手动配置IP范围</span>\n  autoAssign: <span class="token boolean">true</span>\n---\napiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: default\n  namespace: metallb-system\nspec:\n  ipAddressPools:\n  - default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建测试应用" tabindex="-1"><a class="header-anchor" href="#创建测试应用" aria-hidden="true">#</a> 创建测试应用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\n        ports:\n        - name: http\n          containerPort: <span class="token number">80</span>\n \n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\nspec:\n  ports:\n  - name: http\n    port: <span class="token number">80</span>\n    protocol: TCP\n    targetPort: <span class="token number">80</span>\n  selector:\n    app: nginx\n  type: LoadBalancer\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get service</span>\nNAME         TYPE           CLUSTER-IP     EXTERNAL-IP      PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE\nkubernetes   ClusterIP      <span class="token number">10.96</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token number">443</span>/TCP        1d\nnginx        LoadBalancer  <span class="token number">10.102</span>.129.137 <span class="token number">192.168</span>.36.139   <span class="token number">80</span>:31274/TCP   1d\n \n<span class="token comment"># 从集群外访问该IP地址：192.168.36.139</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问成功即可表示部署成功</p><p><img src="https://img.kubesre.com/kubesre/20230824/4.png" alt="image.png"></p><h2 id="helm部署traefik" tabindex="-1"><a class="header-anchor" href="#helm部署traefik" aria-hidden="true">#</a> Helm部署Traefik</h2><p>添加traefik仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 Traefik Labs 图表存储库添加到 Helm：</span>\nhelm repo <span class="token function">add</span> traefik https://traefik.github.io/charts\n \n<span class="token comment"># 您可以通过运行以下命令来更新图表存储库：</span>\nhelm repo update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用helm命令行安装它：</span>\nkubectl create ns traefik\nhelm <span class="token function">install</span> <span class="token parameter variable">-n</span> traefik traefik traefik/traefik\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl get all  -n  traefik   </span>\nNAME                           READY   STATUS    RESTARTS   AGE\npod/traefik-65944f8d5f-k5bfl   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          1d\n \nNAME              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE\nservice/traefik   LoadBalancer   <span class="token number">10.110</span>.60.107   <span class="token number">192.168</span>.36.140   <span class="token number">80</span>:32301/TCP,443:31378/TCP   1d\n \nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/traefik   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           1d\n \nNAME                                 DESIRED   CURRENT   READY   AGE\nreplicaset.apps/traefik-65944f8d5f   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       1d\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="traefik-dashboard" tabindex="-1"><a class="header-anchor" href="#traefik-dashboard" aria-hidden="true">#</a> Traefik Dashboard</h1><p>安装好traefik之后，我们使用 Traefik 自带的 CRD 创建一个ingress规则访问dashboard</p><h2 id="crd方式路由" tabindex="-1"><a class="header-anchor" href="#crd方式路由" aria-hidden="true">#</a> CRD方式路由</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># traefik-dashboard.yaml</span>\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: dashboard\n  namespace: traefik\nspec:\n  entryPoints:\n    - web\n  routes:\n    - match: Host<span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>traefik.lc<span class="token variable">`</span></span><span class="token punctuation">)</span>\n      kind: Rule\n      services:\n        - name: api@internal\n          kind: TraefikService\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f traefik-dashboard.yaml</span>\ningressroute.traefik.containo.us/dashboard created\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本集群部署了 MetalLB 负载均衡器，使用LoadBalancer暴露了了traefik service，可直接拿EXTERNAL-IP 地址访问</p></blockquote><p>添加本地hosts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.36.140 traefik.lc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 27);
const _hoisted_59 = {
  href: "http://traefik.lc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: "https://img.kubesre.com/kubesre/20230824/3.png",
    alt: "image.png"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "总结",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#总结",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 总结")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "本文介绍了Treafik以及与Nginx INgress的对比，并一步一步讲解了部署的过程，下一章将讲解Treafik更多企业级实战，请敬请期待！",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      createTextVNode("之前文章有讲部署 "),
      createBaseVNode("a", _hoisted_1, [
        createTextVNode("Ingress企业实战：部署高可靠性Ingress篇"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("。Ingress-nginx 是kubernetes Ingress 控制器实现的其中一个项目，目前可以实现 ingress 功能的项目有很多：可参考官方文档 "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Ingress 控制器"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 今天使用traefik进行演示，主要是目前traefik已经成为主流。并且traefik有漂亮的dashboard界面，配置简单。")
    ]),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("Traefik 是一款开源的边缘路由器，它可以让发布服务变得轻松有趣。它代表您的系统接收请求，并找出负责处理这些请求的组件。与众不同之处在于，除了它的许多特性之外，它还可以自动为您的服务发现正确的配置。当 Traefik 检查您的基础设施时，它会发现相关信息，并发现哪个服务为哪个请求提供服务。 Traefik 与每个主要的集群技术都是原生兼容的，比如 Kubernetes、Docker、Docker Swarm、AWS、Mesos、Marathon 等等;并且可以同时处理多个。(它甚至适用于运行在裸机上的遗留软件。) 使用 Traefik，不需要维护和同步单独的配置文件:所有事情都是实时自动发生的(没有重启，没有连接中断)。使用 Traefik，只需要花费时间开发和部署新功能到您的系统，而不是配置和维护其工作状态。 项目地址："),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("https://github.com/traefik/traefik"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 官网文档："),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("https://doc.traefik.io/traefik/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_20, [
          createTextVNode("使用官方的Docker镜像"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_21, [
          createTextVNode("使用Helm安装"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_22, [
          createTextVNode("使用二进制安装"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("从源代码编译二进制文件"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_24,
    createBaseVNode("p", null, [
      createTextVNode("参考官网："),
      createBaseVNode("a", _hoisted_31, [
        createTextVNode("https://metallb.universe.tf/installation/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_32,
    createBaseVNode("p", null, [
      createTextVNode("访问 "),
      createBaseVNode("a", _hoisted_59, [
        createTextVNode("http://traefik.lc/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 即可部署成功 "),
      _hoisted_60
    ]),
    _hoisted_61,
    _hoisted_62
  ]);
}
const bushushengchanjiTraefikpian_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "bushushengchanjiTraefikpian.html.vue"]]);
export {
  bushushengchanjiTraefikpian_html as default
};
