import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, e as createVNode, a as createStaticVNode } from "./app-b80752dd.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="什么是operator" tabindex="-1"><a class="header-anchor" href="#什么是operator" aria-hidden="true">#</a> 什么是Operator</h2><p>Kubernetes Operator是一种用来扩展Kubernetes API并实现自定义控制逻辑的应用程序。它由Custom Resource Definitions (CRDs)和定制的控制器组成，能够在Kubernetes中创建、配置和管理复杂的有状态应用。</p><ul><li>Operator的作用</li></ul><p>Operator模式的核心思想是将人类操作员的知识编码到软件中。这意味着operator可以处理例如部署、升级、备份、恢复、故障排查等任务。 例如，一个数据库可能有一个operator，该operator知道如何正确地部署数据库、如何在磁盘空间不足时扩展存储、如何备份数据以及如何在出现问题时恢复数据库等。 通过operator，你可以将复杂应用“原生化”到Kubernetes中，让这些应用能够像基础设施一样被自动管理和调度。</p><p>在Kubernetes中，Custom Resource（CR）、Custom Resource Definition（CRD）和Custom Controller是Operator的核心组件。</p><ul><li>Custom Resource（自定义资源）：Custom Resource（CR）是Kubernetes API中的扩展，允许你创建自己的特定于应用程序的资源类型。您可以像处理内置资源类型（如Deploylent、Pod、Service等）一样处理这些自定义资源。每一个CR都代表了Kubernetes集群中的一种资源对象，比如数据库实例、应用实例等。</li><li>Custom Resource Definition（自定义资源定义）：Custom Resource Definition（CRD）是一种在Kubernetes API中声明新的自定义资源类型的方式。CRD可以理解为自定义资源的模板，描述了新资源的名称、模式和验证规则等信息。一旦创建了CRD，就可以跟其它内置资源一样操作CRD创建的自定义资源（CR）。简单的来说，CRD定义了你想在Kubernetes中创建那种类型的自定义资源。</li><li>Custom Controller（自定义控制器）：自定义控制器是Kubernetes的核心概念之一，它负责管理CRD创建的自定义资源。控制器是一个持续运行的循环，负责观察特定资源的状态，并确保当前状态符合资源规范定义的预期状态。如果两者不符，控制器将采取行动使当前状态与预期状态一致。自定义控制器通常与特定的CRD配套使用，作为Operator的一部分实现复杂的、自动化的管理逻辑。</li></ul><p>总结来说，自定义资源（CR）、自定义资源定义（CRD）和自定义控制器是构建Kubernetes的关键部件，它们共同工作以对Kubernetes进行扩展，从而满足特定应用程序的需求。</p>', 7);
const _hoisted_8 = {
  href: "https://kubernetes.io/zh-cn/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/operator/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h3 id="gvk-group-version-kind" tabindex="-1"><a class="header-anchor" href="#gvk-group-version-kind" aria-hidden="true">#</a> GVK（Group, Version, Kind）</h3><p>用于标识Kubernetes API对象的类型，例如你有可能有一个名称为my-pod的Pod对象，它的GVK就是Pod，由以下三个部分组成：</p><ul><li>Group：资源的API对象属于哪个组，如Deployment、Replicasets等就属于Apps组。</li><li>Version：API的版本，如v1、v1beta1。</li><li>Kind: 资源的类别，例如Pod、Deployment、Service等。</li></ul><h3 id="gvr-group-version-resource" tabindex="-1"><a class="header-anchor" href="#gvr-group-version-resource" aria-hidden="true">#</a> GVR (Group, Version, Resource)</h3><p>类似于GVK，但它代表的是API资源实例，而不是类型，由以下三个部分组成：</p><ul><li>Group：资源的API组，如apps、batch。</li><li>Version：API的版本，如v1、v1beta1。</li><li>Resource: 资源的复数名称，例如Pods、Deployments、Services等。</li></ul><h3 id="使用customresourcedefinition扩展kubernetes-api" tabindex="-1"><a class="header-anchor" href="#使用customresourcedefinition扩展kubernetes-api" aria-hidden="true">#</a> 使用CustomResourceDefinition扩展Kubernetes API</h3>', 7);
const _hoisted_18 = {
  href: "https://kubernetes.io/zh-cn/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "开发自己的operator",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#开发自己的operator",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 开发自己的Operator")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "kubernetes-operator库和工具",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#kubernetes-operator库和工具",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Kubernetes Operator库和工具")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = {
  href: "https://github.com/cncf/tag-app-delivery/blob/eece8f7307f2970f46f100f51932db106db46968/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = {
  href: "https://github.com/kubernetes-sigs/kubebuilder",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = {
  href: "https://github.com/operator-framework/operator-sdk",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = {
  href: "https://github.com/flant/shell-operator",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = {
  href: "https://juju.is/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_26 = {
  href: "https://github.com/operator-framework/java-operator-sdk",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = {
  href: "https://github.com/nolar/kopf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = {
  href: "https://kube.rs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = {
  href: "https://buehler.github.io/dotnet-operator-sdk/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = {
  href: "https://kudo.dev/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = {
  href: "https://docs.ansi.services/mast/user_guide/operator/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = {
  href: "https://metacontroller.github.io/metacontroller/intro.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "安装kubebuilder",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#安装kubebuilder",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 安装Kubebuilder")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = {
  href: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "安装Go 1.20.6")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = {
  href: "https://go.dev/doc/install",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://go.dev/dl/go1.20.6.linux-amd64.tar.gz\n<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/go <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> <span class="token parameter variable">-C</span> /usr/local <span class="token parameter variable">-xzf</span> go1.20.6.linux-amd64.tar.gz\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/go/bin\ngo version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装kubebuilder</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc\n<span class="token comment"># download kubebuilder and install locally.</span>\n<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> kubebuilder <span class="token string">&quot;https://go.kubebuilder.io/dl/latest/<span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOOS<span class="token variable">)</span></span>/<span class="token variable"><span class="token variable">$(</span>go <span class="token function">env</span> GOARCH<span class="token variable">)</span></span>&quot;</span>\n<span class="token function">chmod</span> +x kubebuilder <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> kubebuilder /usr/local/bin/\n\nkubebuilder version\nVersion: main.version<span class="token punctuation">{</span>KubeBuilderVersion:<span class="token string">&quot;3.11.1&quot;</span>, KubernetesVendor:<span class="token string">&quot;1.27.1&quot;</span>, GitCommit:<span class="token string">&quot;1dc8ed95f7cc55fef3151f749d3d541bec3423c9&quot;</span>, BuildDate:<span class="token string">&quot;2023-07-03T13:10:56Z&quot;</span>, GoOs:<span class="token string">&quot;linux&quot;</span>, GoArch:<span class="token string">&quot;amd64&quot;</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/projects/guestbook\n<span class="token builtin class-name">cd</span> ~/projects/guestbook\nkubebuilder init <span class="token parameter variable">--domain</span> gitee.com <span class="token parameter variable">--repo</span> gitee.com/KubeSec/guestbook <span class="token parameter variable">--owner</span> KubeSec\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建api" tabindex="-1"><a class="header-anchor" href="#创建api" aria-hidden="true">#</a> 创建API</h3><p>我们将定义一个Guestbook的CRD 使用下列命令创建一个新的API</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubebuilder create api --group webapp --version v1 --kind Guestbook</span>\nCreate Resource <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>\ny\nCreate Controller <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>\ny\n\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># tree .</span>\n<span class="token builtin class-name">.</span>\n├── api\n│   └── v1\n│       ├── groupversion_info.go\n│       ├── guestbook_types.go\n│       └── zz_generated.deepcopy.go\n├── bin\n│   └── controller-gen\n├── cmd\n│   └── main.go\n├── config\n│   ├── crd\n│   │   ├── kustomization.yaml\n│   │   ├── kustomizeconfig.yaml\n│   │   └── patches\n│   │       ├── cainjection_in_guestbooks.yaml\n│   │       └── webhook_in_guestbooks.yaml\n│   ├── default\n│   │   ├── kustomization.yaml\n│   │   ├── manager_auth_proxy_patch.yaml\n│   │   └── manager_config_patch.yaml\n│   ├── manager\n│   │   ├── kustomization.yaml\n│   │   └── manager.yaml\n│   ├── prometheus\n│   │   ├── kustomization.yaml\n│   │   └── monitor.yaml\n│   ├── rbac\n│   │   ├── auth_proxy_client_clusterrole.yaml\n│   │   ├── auth_proxy_role_binding.yaml\n│   │   ├── auth_proxy_role.yaml\n│   │   ├── auth_proxy_service.yaml\n│   │   ├── guestbook_editor_role.yaml\n│   │   ├── guestbook_viewer_role.yaml\n│   │   ├── kustomization.yaml\n│   │   ├── leader_election_role_binding.yaml\n│   │   ├── leader_election_role.yaml\n│   │   ├── role_binding.yaml\n│   │   └── service_account.yaml\n│   └── samples\n│       ├── kustomization.yaml\n│       └── webapp_v1_guestbook.yaml\n├── Dockerfile\n├── go.mod\n├── go.sum\n├── hack\n│   └── boilerplate.go.txt\n├── internal\n│   └── controller\n│       ├── guestbook_controller.go\n│       └── suite_test.go\n├── Makefile\n├── PROJECT\n└── README.md\n\n<span class="token number">15</span> directories, <span class="token number">38</span> files\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，--group是你的组名（如apps、batch等），--version是API版本（如v1、v1beta1、v1alpha1）， --kind是你的自定义资源类型。 这个命令将会询问你是否需要为这个资源创建一个Resource，以及是否为这个资源创建一个Controller。 两者都应该选y 命令执行完毕后，一个新的控制器就被创建在internal/controller/guestbook_controller.go文件中， 一个新的Guestbook的CRD就被创建在api/v1/guestbook_types.go文件中。 在guestbook_types.go文件中会看到GuestbookSpec等代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// GuestbookSpec defines the desired state of Guestbook</span>\n<span class="token keyword">type</span> GuestbookSpec <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n	<span class="token comment">// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster</span>\n	<span class="token comment">// Important: Run &quot;make&quot; to regenerate code after modifying this file</span>\n\n	<span class="token comment">// Foo is an example field of Guestbook. Edit guestbook_types.go to remove/update</span>\n	Foo <span class="token builtin">string</span> <span class="token string">`json:&quot;foo,omitempty&quot;`</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在guestbook_controller.go文件会看到如下代码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// For more details, check Reconcile and its Result here:</span>\n<span class="token comment">// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.15.0/pkg/reconcile</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>GuestbookReconciler<span class="token punctuation">)</span> <span class="token function">Reconcile</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req ctrl<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">(</span>ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token boolean">_</span> <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">FromContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n\n	<span class="token comment">// TODO(user): your logic here</span>\n\n	<span class="token keyword">return</span> ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>   \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现crd" tabindex="-1"><a class="header-anchor" href="#实现crd" aria-hidden="true">#</a> 实现CRD</h3><p>注释默认的Foo字段，添加自己需要的配置</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// GuestbookSpec defines the desired state of Guestbook</span>\n<span class="token keyword">type</span> GuestbookSpec <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n	<span class="token comment">// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster</span>\n	<span class="token comment">// Important: Run &quot;make&quot; to regenerate code after modifying this file</span>\n\n	<span class="token comment">// Foo is an example field of Guestbook. Edit guestbook_types.go to remove/update</span>\n	<span class="token comment">// Foo string `json:&quot;foo,omitempty&quot;`</span>\n\n	Name <span class="token builtin">string</span> <span class="token string">`json:&quot;name,omitempty&quot;`</span>\n\n	Image <span class="token builtin">string</span> <span class="token string">`json:&quot;image,omitempty&quot;`</span>\n\n	Port <span class="token builtin">int</span> <span class="token string">`json:&quot;port,omitempty&quot;`</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现控制器" tabindex="-1"><a class="header-anchor" href="#实现控制器" aria-hidden="true">#</a> 实现控制器</h3><ul><li>修改internal/controller/guestbook_controller.go中reconcile, 通过Reconcile完成Pod的创建</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> controller\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token comment">// ...</span>\n	corev1 <span class="token string">&quot;k8s.io/api/core/v1&quot;</span>\n	metav1 <span class="token string">&quot;k8s.io/apimachinery/pkg/apis/meta/v1&quot;</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">)</span>\n\n\n<span class="token comment">// For more details, check Reconcile and its Result here:</span>\n<span class="token comment">// - https://pkg.go.dev/sigs.k8s.io/controller-runtime@v0.15.0/pkg/reconcile</span>\n<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>GuestbookReconciler<span class="token punctuation">)</span> <span class="token function">Reconcile</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req ctrl<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">(</span>ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token boolean">_</span> <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">FromContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n\n	<span class="token comment">// TODO(user): your logic here</span>\n	guestBook <span class="token operator">:=</span> <span class="token operator">&amp;</span>webappv1<span class="token punctuation">.</span>Guestbook<span class="token punctuation">{</span><span class="token punctuation">}</span>\n	<span class="token keyword">if</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>Client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> req<span class="token punctuation">.</span>NamespacedName<span class="token punctuation">,</span> guestBook<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token keyword">return</span> ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err\n	<span class="token punctuation">}</span>\n\n	pod <span class="token operator">:=</span> <span class="token operator">&amp;</span>corev1<span class="token punctuation">.</span>Pod<span class="token punctuation">{</span>\n		TypeMeta<span class="token punctuation">:</span> metav1<span class="token punctuation">.</span>TypeMeta<span class="token punctuation">{</span>\n			APIVersion<span class="token punctuation">:</span> corev1<span class="token punctuation">.</span>SchemeGroupVersion<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n			Kind<span class="token punctuation">:</span>       <span class="token string">&quot;Pod&quot;</span><span class="token punctuation">,</span>\n		<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		ObjectMeta<span class="token punctuation">:</span> metav1<span class="token punctuation">.</span>ObjectMeta<span class="token punctuation">{</span>\n			Name<span class="token punctuation">:</span>      guestBook<span class="token punctuation">.</span>Spec<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>\n			Namespace<span class="token punctuation">:</span> guestBook<span class="token punctuation">.</span>Namespace<span class="token punctuation">,</span>\n		<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		Spec<span class="token punctuation">:</span> corev1<span class="token punctuation">.</span>PodSpec<span class="token punctuation">{</span>\n			Containers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>corev1<span class="token punctuation">.</span>Container<span class="token punctuation">{</span>\n				<span class="token punctuation">{</span>\n					Name<span class="token punctuation">:</span> <span class="token string">&quot;nginx&quot;</span><span class="token punctuation">,</span>\n					Ports<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>corev1<span class="token punctuation">.</span>ContainerPort<span class="token punctuation">{</span>\n						<span class="token punctuation">{</span>\n							ContainerPort<span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n							Name<span class="token punctuation">:</span>          <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n							Protocol<span class="token punctuation">:</span>      <span class="token string">&quot;TCP&quot;</span><span class="token punctuation">,</span>\n						<span class="token punctuation">}</span><span class="token punctuation">,</span>\n					<span class="token punctuation">}</span><span class="token punctuation">,</span>\n					Image<span class="token punctuation">:</span> guestBook<span class="token punctuation">.</span>Spec<span class="token punctuation">.</span>Image<span class="token punctuation">,</span>\n				<span class="token punctuation">}</span><span class="token punctuation">,</span>\n			<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">}</span>\n	<span class="token keyword">if</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> pod<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token keyword">return</span> ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err\n	<span class="token punctuation">}</span>\n\n	<span class="token keyword">return</span> ctrl<span class="token punctuation">.</span>Result<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行和安装crd" tabindex="-1"><a class="header-anchor" href="#运行和安装crd" aria-hidden="true">#</a> 运行和安装CRD</h3><ul><li>如果修改了API定义，则使用以下名称生成CR或CRD等清单</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># make manifests</span>\n<span class="token builtin class-name">test</span> <span class="token parameter variable">-s</span> /root/projects/guestbook/bin/controller-gen <span class="token operator">&amp;&amp;</span> /root/projects/guestbook/bin/controller-gen <span class="token parameter variable">--version</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> v0.12.0 <span class="token operator">||</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">GOBIN</span><span class="token operator">=</span>/root/projects/guestbook/bin go <span class="token function">install</span> sigs.k8s.io/controller-tools/cmd/controller-gen@v0.12.0\n/root/projects/guestbook/bin/controller-gen rbac:roleName<span class="token operator">=</span>manager-role crd webhook <span class="token assign-left variable">paths</span><span class="token operator">=</span><span class="token string">&quot;./...&quot;</span> output:crd:artifacts:config<span class="token operator">=</span>config/crd/bases\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装CRD到集群</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>部署CR，使用config/samples/webapp_v1_guestbook.yaml</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: webapp.gitee.com/v1\nkind: Guestbook\nmetadata:\n  labels:\n    app.kubernetes.io/name: guestbook\n    app.kubernetes.io/instance: guestbook-sample\n    app.kubernetes.io/part-of: guestbook\n    app.kubernetes.io/managed-by: kustomize\n    app.kubernetes.io/created-by: guestbook\n  name: guestbook-sample\nspec:\n  <span class="token comment"># TODO(user): Add fields here</span>\n  name: <span class="token string">&quot;guestbook-pod&quot;</span>\n  image: <span class="token string">&quot;nginx:1.14.2&quot;</span>\n\n\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl create -f config/samples/webapp_v1_guestbook.yaml</span>\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl get guestbook</span>\nNAME               AGE\nguestbook-sample   4s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行控制器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># make run</span>\n<span class="token builtin class-name">test</span> <span class="token parameter variable">-s</span> /root/projects/guestbook/bin/controller-gen <span class="token operator">&amp;&amp;</span> /root/projects/guestbook/bin/controller-gen <span class="token parameter variable">--version</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> v0.12.0 <span class="token operator">||</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">GOBIN</span><span class="token operator">=</span>/root/projects/guestbook/bin go <span class="token function">install</span> sigs.k8s.io/controller-tools/cmd/controller-gen@v0.12.0\n/root/projects/guestbook/bin/controller-gen rbac:roleName<span class="token operator">=</span>manager-role crd webhook <span class="token assign-left variable">paths</span><span class="token operator">=</span><span class="token string">&quot;./...&quot;</span> output:crd:artifacts:config<span class="token operator">=</span>config/crd/bases\n/root/projects/guestbook/bin/controller-gen object:headerFile<span class="token operator">=</span><span class="token string">&quot;hack/boilerplate.go.txt&quot;</span> <span class="token assign-left variable">paths</span><span class="token operator">=</span><span class="token string">&quot;./...&quot;</span>\ngo <span class="token function">fmt</span> ./<span class="token punctuation">..</span>.\ngo vet ./<span class="token punctuation">..</span>.\ngo run ./cmd/main.go\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	controller-runtime.metrics	Metrics server is starting to listen	<span class="token punctuation">{</span><span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;:8080&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	setup	starting manager\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	starting server	<span class="token punctuation">{</span><span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/metrics&quot;</span>, <span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;metrics&quot;</span>, <span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;[::]:8080&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	Starting server	<span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;health probe&quot;</span>, <span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;[::]:8081&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	Starting EventSource	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span>, <span class="token string">&quot;source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kind source: *v1.Guestbook&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	Starting Controller	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:25+08:00	INFO	Starting workers	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span>, <span class="token string">&quot;worker count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span>\n^C2023-07-31T21:52:45+08:00	INFO	Stopping and waiting <span class="token keyword">for</span> non leader election runnables\n<span class="token number">2023</span>-07-31T21:52:45+08:00	INFO	shutting down server	<span class="token punctuation">{</span><span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/metrics&quot;</span>, <span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;metrics&quot;</span>, <span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;[::]:8080&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:45+08:00	INFO	Stopping and waiting <span class="token keyword">for</span> leader election runnables\n<span class="token number">2023</span>-07-31T21:52:45+08:00	INFO	Shutdown signal received, waiting <span class="token keyword">for</span> all workers to finish	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-07-31T21:52:45+08:00	INFO	All workers finished	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span><span class="token punctuation">}</span>\n\n\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl get pods</span>\nNAME            READY   STATUS    RESTARTS   AGE\nguestbook-pod   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          42s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署controller" tabindex="-1"><a class="header-anchor" href="#部署controller" aria-hidden="true">#</a> 部署Controller</h2><p>提示：如果kubernetes Runtime是Docker，可直接配置nerdctl、buildkit部分，直接观看“构建镜像并推送至镜像仓库” 本文kubernetes Runtime是Containerd环境使用nerdctl构建镜像</p>', 29);
const _hoisted_66 = {
  href: "https://github.com/containerd/containerd/blob/main/docs/getting-started.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = {
  href: "https://github.com/containerd/nerdctl/releases",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "安装nerdctl")
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/containerd/nerdctl/releases/download/v1.4.0/nerdctl-1.4.0-linux-amd64.tar.gz\n<span class="token function">tar</span> Cxzvvf /usr/local/bin nerdctl-1.4.0-linux-amd64.tar.gz\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装buildkit</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/moby/buildkit/releases/download/v0.12.0/buildkit-v0.12.0.linux-amd64.tar.gz\n<span class="token function">tar</span> xf buildkit-v0.12.0.linux-amd64.tar.gz\n<span class="token function">cp</span> bin/* /usr/local/bin/\n\n<span class="token function">vim</span> /etc/systemd/system/buildkit.service\n<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\n<span class="token assign-left variable">Description</span><span class="token operator">=</span>BuildKit\n<span class="token assign-left variable">Requires</span><span class="token operator">=</span>buildkit.socket\n<span class="token assign-left variable">After</span><span class="token operator">=</span>buildkit.socket\n<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/moby/buildkit\n\n<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\n<span class="token assign-left variable">Type</span><span class="token operator">=</span>notify\n<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/buildkitd --oci-worker<span class="token operator">=</span>false --containerd-worker<span class="token operator">=</span>true\n\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\n<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target\n\n<span class="token function">vim</span> /etc/systemd/system/buildkit.socket\n<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\n<span class="token assign-left variable">Description</span><span class="token operator">=</span>BuildKit\n<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/moby/buildkit\n\n<span class="token punctuation">[</span>Socket<span class="token punctuation">]</span>\n<span class="token assign-left variable">ListenStream</span><span class="token operator">=</span>%t/buildkit/buildkitd.sock\n<span class="token assign-left variable">SocketMode</span><span class="token operator">=</span>0660\n\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\n<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>sockets.target\n\n\nsystemctl daemon-reload\nsystemctl <span class="token builtin class-name">enable</span> buildkit\nsystemctl start buildkit\n\n<span class="token comment"># 测试</span>\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># nerdctl build -t guestbook-operator:v0.0.1 .</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改项目中Makefile 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>把 CONTAINER_TOOL 的值改为nerdctl\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改项目Dockerfile</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> golang:1.20  改为 registry.ap-northeast-1.aliyuncs.com/kubesec/golang:1.20  \n gcr.io/distroless/static:nonroot 改为 registry.ap-northeast-1.aliyuncs.com/kubesec/distroless-static:nonroot   \n\n在RUN go mod download之上设置 go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on 和RUN go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>默认项目会部署在namespace： guestbook-system</li></ul><p>修改默认namesapce: 在项目config/default/kustomization.yaml文件中修改namespace的值即可</p><ul><li>构建镜像并推送至镜像仓库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># make docker-build docker-push IMG=&lt;some-registry&gt;/&lt;project-name&gt;:tag</span>\n<span class="token comment"># docker-push参数会构建镜像并推送到镜像仓库</span>\n<span class="token function">make</span> docker-build docker-push <span class="token assign-left variable">IMG</span><span class="token operator">=</span>registry.ap-northeast-1.aliyuncs.com/kubesec/guestbook-operator:v0.0.1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>部署Operator到kubernetes集群</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> deploy <span class="token assign-left variable">IMG</span><span class="token operator">=</span>registry.ap-northeast-1.aliyuncs.com/kubesec/guestbook-operator:v0.0.1\n\n\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl -n guestbook-system get svc,deployment,pods</span>\nNAME                                                   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>    AGE\nservice/guestbook-controller-manager-metrics-service   ClusterIP   <span class="token number">10.97</span>.35.230   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8443</span>/TCP   16m\n\nNAME                                           READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/guestbook-controller-manager   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           16m\n\nNAME                                                READY   STATUS    RESTARTS   AGE\npod/guestbook-controller-manager-57cb6cbbf4-hxghw   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          2m35s\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果guestbook-controller-manager日志出现如下报错，在下图所示位置增加RBAC授权重新部署服务即可</li></ul>', 14);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24"
    }, [
      /* @__PURE__ */ createBaseVNode("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, [
        /* @__PURE__ */ createBaseVNode("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 8v4" }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 16h.01" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "WARNING"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, 'ERROR Reconciler error {"controller": "guestbook", "controllerGroup": "webapp.gitee.com", "controllerKind": "Guestbook", "Guestbook": {"name":"guestbook-sample","namespace":"default"}, "namespace": "default", "name": "guestbook-sample", "reconcileID": "c26896bc-559a-4e55-8429-4c130befc9a4", "error": "Guestbook.webapp.gitee.com "guestbook-sample" not found"}')
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//+kubebuilder:rbac:groups<span class="token operator">=</span><span class="token string">&quot;&quot;</span>,resources<span class="token operator">=</span>pods,verbs<span class="token operator">=</span>create<span class="token punctuation">;</span>get<span class="token punctuation">;</span>list<span class="token punctuation">;</span><span class="token function">watch</span><span class="token punctuation">;</span>update<span class="token punctuation">;</span>patch<span class="token punctuation">;</span>delete\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img.kubesre.com/kubernetes/image.png" alt="image.png"></p><p>项目地址：https://gitee.com/KubeSec/guestbook/tree/v0.1</p><h3 id="资源清理" tabindex="-1"><a class="header-anchor" href="#资源清理" aria-hidden="true">#</a> 资源清理</h3><ul><li>卸载CRD</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> uninstall\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载Controller</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> undeploy\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("https://kubernetes.io/zh-cn/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/api-extension/custom-resources/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/operator/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createTextVNode("请参考官方文档 "),
      createBaseVNode("a", _hoisted_18, [
        createTextVNode("https://kubernetes.io/zh-cn/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_19,
    _hoisted_20,
    createBaseVNode("p", null, [
      createTextVNode("以下是一些库和工具，你可以用于编写自己的云原生Operator "),
      createBaseVNode("a", _hoisted_21, [
        createTextVNode("https://github.com/cncf/tag-app-delivery/blob/eece8f7307f2970f46f100f51932db106db46968/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("kubebuilder: "),
        createBaseVNode("a", _hoisted_22, [
          createTextVNode("https://github.com/kubernetes-sigs/kubebuilder"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Operator Framework: "),
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("https://github.com/operator-framework/operator-sdk"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("shell-operator: "),
        createBaseVNode("a", _hoisted_24, [
          createTextVNode("https://github.com/flant/shell-operator"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Charmed Operator Framework : "),
        createBaseVNode("a", _hoisted_25, [
          createTextVNode("https://juju.is/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Java Operator SDK: "),
        createBaseVNode("a", _hoisted_26, [
          createTextVNode("https://github.com/operator-framework/java-operator-sdk"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Kopf（kubernetes Operator Pythonic Framework）: "),
        createBaseVNode("a", _hoisted_27, [
          createTextVNode("https://github.com/nolar/kopf"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("kube-rs（Rust）: "),
        createBaseVNode("a", _hoisted_28, [
          createTextVNode("https://kube.rs/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("KubeOps （.NET operator SDK）: "),
        createBaseVNode("a", _hoisted_29, [
          createTextVNode("https://buehler.github.io/dotnet-operator-sdk/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("KUDO（Kubernetes 通用声明式Operator）: "),
        createBaseVNode("a", _hoisted_30, [
          createTextVNode("https://kudo.dev/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Mast: "),
        createBaseVNode("a", _hoisted_31, [
          createTextVNode("https://docs.ansi.services/mast/user_guide/operator/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Metacontroller（可与Webhook结合使用，以实现自己的功能）: "),
        createBaseVNode("a", _hoisted_32, [
          createTextVNode("https://metacontroller.github.io/metacontroller/intro.html"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_33,
    createBaseVNode("p", null, [
      createTextVNode("kubebuilder是使用自定义资源定义CRD（"),
      createBaseVNode("a", _hoisted_34, [
        createTextVNode("https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" ）构建Kubernetes API的框架，kubebuilders是类似SprintBoot、Gin等Web开发框架。 Kubebuilder提高了开发人员在Go中快速构建和发布Kubernetes API的速度并降低了管理的复杂性。提供了强大的库和工具来简化从头开始构建和发布Kubernetes API。 kubernetes 是可扩展的，可以在其它项目中用作库，Operator-SDK是使用kubebuilder作为库的项目的一个很好的示例。Operator-SDK使用插件功能来包含非Go，例如使用Operator-sdk的Ansible和基于Helm的语言的Operators。")
    ]),
    _hoisted_35,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_36, [
        createTextVNode("https://go.dev/doc/install"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_37,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_66, [
            createTextVNode("https://github.com/containerd/containerd/blob/main/docs/getting-started.md"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_67, [
            createTextVNode("https://github.com/containerd/nerdctl/releases"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      _hoisted_68
    ]),
    _hoisted_69,
    _hoisted_83,
    _hoisted_84
  ]);
}
const kaifazijideKubernetes_operator_yi__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "kaifazijideKubernetes operator（yi).html.vue"]]);
export {
  kaifazijideKubernetes_operator_yi__html as default
};
