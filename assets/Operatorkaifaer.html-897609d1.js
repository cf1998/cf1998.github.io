import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode, e as createVNode, a as createStaticVNode } from "./app-ac7ac36b.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "项目源码：https://gitee.com/KubeSec/guestbook/tree/v0.2",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "创建事件",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#创建事件",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 创建事件")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://book.kubebuilder.io/reference/raising-events.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "可以通过运行kubectl describe <resource kind> <resource name>。此外，还可以通过运行kubectl get evetns来检查它们")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#events",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="在控制器上使用eventrecorder" tabindex="-1"><a class="header-anchor" href="#在控制器上使用eventrecorder" aria-hidden="true">#</a> 在控制器上使用EventRecorder</h2><p>internal/controller/guestbook_controller.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// GuestbookReconciler reconciles a Guestbook object</span>\n<span class="token keyword">type</span> GuestbookReconciler <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n	client<span class="token punctuation">.</span>Client\n	Scheme <span class="token operator">*</span>runtime<span class="token punctuation">.</span>Scheme\n	<span class="token comment">// See that we added the following code to allow us to pass the record.EventRecorder</span>\n	Recorder record<span class="token punctuation">.</span>EventRecorder\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.kubesre.com/kubesre/operator/20230802/a.png" alt="image.png"></p><h2 id="如何能够引发事件" tabindex="-1"><a class="header-anchor" href="#如何能够引发事件" aria-hidden="true">#</a> 如何能够引发事件？</h2>', 5);
const _hoisted_11 = {
  href: "https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#events",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>controller<span class="token punctuation">.</span>GuestbookReconciler<span class="token punctuation">{</span>\n		Client<span class="token punctuation">:</span> mgr<span class="token punctuation">.</span><span class="token function">GetClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n		Scheme<span class="token punctuation">:</span> mgr<span class="token punctuation">.</span><span class="token function">GetScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n		<span class="token comment">// Note that we added the following line:</span>\n		Recorder<span class="token punctuation">:</span> mgr<span class="token punctuation">.</span><span class="token function">GetEventRecorderFor</span><span class="token punctuation">(</span><span class="token string">&quot;Guestbook-controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetupWithManager</span><span class="token punctuation">(</span>mgr<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		setupLog<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;unable to create controller&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;controller&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Guestbook&quot;</span><span class="token punctuation">)</span>\n		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.kubesre.com/kubesre/operator/20230802/b.png" alt="image.png"> 授权允许项目创建事件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//+kubebuilder:rbac:groups=core,resources=events,verbs=create;patch</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 3);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
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
        /* @__PURE__ */ createBaseVNode("path", { d: "M12 8h.01" }),
        /* @__PURE__ */ createBaseVNode("path", { d: "M11 12h1v4h1" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "TIP"),
    /* @__PURE__ */ createBaseVNode("p", null, `events is forbidden: User "system:serviceaccount:guestbook-system:guestbook-controller-manager" cannot create resource "events" in API group "" in the namespace "default"' (will not retry!)`)
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p><img src="https://img.kubesre.com/kubesre/operator/20230802/c.png" alt="image.png"></p><h2 id="生成events" tabindex="-1"><a class="header-anchor" href="#生成events" aria-hidden="true">#</a> 生成Events</h2><h3 id="事件刨析" tabindex="-1"><a class="header-anchor" href="#事件刨析" aria-hidden="true">#</a> 事件刨析</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token function">Event</span><span class="token punctuation">(</span>object runtime<span class="token punctuation">.</span>Object<span class="token punctuation">,</span> eventtype<span class="token punctuation">,</span> reason<span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 4);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "object：是此事件所涉及的对象。",
  -1
  /* HOISTED */
);
const _hoisted_21 = {
  href: "https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6019-L6024",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = {
  href: "https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6048",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = {
  href: "https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6053",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<h3 id="用法示例" tabindex="-1"><a class="header-anchor" href="#用法示例" aria-hidden="true">#</a> 用法示例</h3><p>以下是生成事件的代码实现示例。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    <span class="token comment">// The following implementation will raise an event</span>\n    r<span class="token punctuation">.</span>Recorder<span class="token punctuation">.</span><span class="token function">Event</span><span class="token punctuation">(</span>cr<span class="token punctuation">,</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Deleting&quot;</span><span class="token punctuation">,</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Custom Resource %s is being deleted from the namespace %s&quot;</span><span class="token punctuation">,</span>\n            cr<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>\n            cr<span class="token punctuation">.</span>Namespace<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加事件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>r.Recorder.Event<span class="token punctuation">(</span>guestBook, corev1.EventTypeNormal, <span class="token string">&quot;Created&quot;</span>, fmt.Sprintf<span class="token punctuation">(</span><span class="token string">&quot;Custom Resource %s is being deleted from the namespace %s&quot;</span>, guestBook.Name, guestBook.Namespace<span class="token punctuation">))</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img.kubesre.com/kubesre/operator/20230802/d.png" alt="image.png"></p><ul><li>部署测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>\n<span class="token function">make</span> docker-build docker-push <span class="token assign-left variable">IMG</span><span class="token operator">=</span>registry.ap-northeast-1.aliyuncs.com/kubesec/guestbook-operator:v0.0.110\n<span class="token function">make</span> deploy <span class="token assign-left variable">IMG</span><span class="token operator">=</span>registry.ap-northeast-1.aliyuncs.com/kubesec/guestbook-operator:v0.0.110\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>清理上一篇创建的资源</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f config/samples/webapp_v1_guestbook.yaml</span>\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod guestbook-pod</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建CR</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl create -f config/samples/webapp_v1_guestbook.yaml</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看事件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl describe guestbook guestbook-sample</span>\nName:         guestbook-sample\nNamespace:    default\nLabels:       app.kubernetes.io/created-by<span class="token operator">=</span>guestbook\n              app.kubernetes.io/instance<span class="token operator">=</span>guestbook-sample\n              app.kubernetes.io/managed-by<span class="token operator">=</span>kustomize\n              app.kubernetes.io/name<span class="token operator">=</span>guestbook\n              app.kubernetes.io/part-of<span class="token operator">=</span>guestbook\nAnnotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>\nAPI Version:  webapp.gitee.com/v1\nKind:         Guestbook\nMetadata:\n  Creation Timestamp:  <span class="token number">2023</span>-08-01T12:50:39Z\n  Generation:          <span class="token number">1</span>\n  Managed Fields:\n    API Version:  webapp.gitee.com/v1\n    Fields Type:  FieldsV1\n    fieldsV1:\n      f:metadata:\n        f:labels:\n          .:\n          f:app.kubernetes.io/created-by:\n          f:app.kubernetes.io/instance:\n          f:app.kubernetes.io/managed-by:\n          f:app.kubernetes.io/name:\n          f:app.kubernetes.io/part-of:\n      f:spec:\n        .:\n        f:image:\n        f:name:\n    Manager:         kubectl-create\n    Operation:       Update\n    Time:            <span class="token number">2023</span>-08-01T12:50:39Z\n  Resource Version:  <span class="token number">12841133</span>\n  <span class="token environment constant">UID</span><span class="token builtin class-name">:</span>               3a81272b-c511-427a-86ab-21fde84f4d9a\nSpec:\n  Image:  nginx:1.14.2\n  Name:   guestbook-pod\nEvents:\n  Type    Reason   Age   From                  Message\n  ----    ------   ----  ----                  -------\n  Normal  Created  37s   Guestbook-controller  Custom Resource guestbook-sample is being deleted from the namespace default\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看controller日志</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl -n guestbook-system get pods</span>\nNAME                                            READY   STATUS    RESTARTS   AGE\nguestbook-controller-manager-596f8f998c-zlczz   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          3m28s\n<span class="token punctuation">[</span>root@k8s guestbook<span class="token punctuation">]</span><span class="token comment"># kubectl -n guestbook-system logs -f guestbook-controller-manager-596f8f998c-zlczz</span>\n<span class="token number">2023</span>-08-01T12:50:04Z	INFO	controller-runtime.metrics	Metrics server is starting to listen	<span class="token punctuation">{</span><span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1:8080&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:04Z	INFO	setup	starting manager\n<span class="token number">2023</span>-08-01T12:50:04Z	INFO	Starting server	<span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;health probe&quot;</span>, <span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;[::]:8081&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:04Z	INFO	starting server	<span class="token punctuation">{</span><span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/metrics&quot;</span>, <span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;metrics&quot;</span>, <span class="token string">&quot;addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1:8080&quot;</span><span class="token punctuation">}</span>\nI0801 <span class="token number">12</span>:50:04.930224       <span class="token number">1</span> leaderelection.go:245<span class="token punctuation">]</span> attempting to acquire leader lease guestbook-system/7b39d769.gitee.com<span class="token punctuation">..</span>.\nI0801 <span class="token number">12</span>:50:31.048126       <span class="token number">1</span> leaderelection.go:255<span class="token punctuation">]</span> successfully acquired lease guestbook-system/7b39d769.gitee.com\n<span class="token number">2023</span>-08-01T12:50:31Z	DEBUG	events	guestbook-controller-manager-596f8f998c-zlczz_be909418-4a5d-453d-9bad-5e83955bd301 became leader	<span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Normal&quot;</span>, <span class="token string">&quot;object&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lease&quot;</span>,<span class="token string">&quot;namespace&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;guestbook-system&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;7b39d769.gitee.com&quot;</span>,<span class="token string">&quot;uid&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;34b2a65f-95fb-4985-8d19-bc7109b732a0&quot;</span>,<span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;coordination.k8s.io/v1&quot;</span>,<span class="token string">&quot;resourceVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;12841094&quot;</span><span class="token punctuation">}</span>, <span class="token string">&quot;reason&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;LeaderElection&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:31Z	INFO	Starting EventSource	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span>, <span class="token string">&quot;source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kind source: *v1.Guestbook&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:31Z	INFO	Starting Controller	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:31Z	INFO	Starting workers	<span class="token punctuation">{</span><span class="token string">&quot;controller&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;guestbook&quot;</span>, <span class="token string">&quot;controllerGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;webapp.gitee.com&quot;</span>, <span class="token string">&quot;controllerKind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Guestbook&quot;</span>, <span class="token string">&quot;worker count&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span>\n<span class="token number">2023</span>-08-01T12:50:39Z	DEBUG	events	Custom Resource guestbook-sample is being deleted from the namespace default	<span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Normal&quot;</span>, <span class="token string">&quot;object&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Guestbook&quot;</span>,<span class="token string">&quot;namespace&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;default&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;guestbook-sample&quot;</span>,<span class="token string">&quot;uid&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;3a81272b-c511-427a-86ab-21fde84f4d9a&quot;</span>,<span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;webapp.gitee.com/v1&quot;</span>,<span class="token string">&quot;resourceVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;12841133&quot;</span><span class="token punctuation">}</span>, <span class="token string">&quot;reason&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Created&quot;</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 16);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("https://book.kubebuilder.io/reference/raising-events.html"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 从控制器协调功能发布事件对象通常很有用，因为它们允许用户或任何自动化进程查看特定对象发生的情况并对其做出响应。")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("注意：不建议为所有操作发出事件。如果作者引发太多事件，就会给集群上的解决方案使用者带来糟糕的用户体验。并且他们可能会发现很难从混乱的事件中过滤出可操作的事件。有关更多信息，请查看 Kubernetes API约定"),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#events"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("以下是带有示例的步骤，可帮助您在控制器的协调中引发事件。事件是使用EventRecorder（"),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#events"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("）从Controller发布的type CorrelatorOptions struct， 可以通过调用GetRecorder(name string)Manager为Controller创建事件记录器 cmd/main.go")
    ]),
    _hoisted_12,
    _hoisted_15,
    _hoisted_16,
    createBaseVNode("ul", null, [
      _hoisted_20,
      createBaseVNode("li", null, [
        createTextVNode("eventtype：是此事件类型，并且是Normal或Warning。（"),
        createBaseVNode("a", _hoisted_21, [
          createTextVNode("https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6019-L6024"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("）")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("reason：是生成此事件的原因。它应该简短且UpperCameCase格式独特。该值可以自动出现在wsitch语句中。（"),
        createBaseVNode("a", _hoisted_22, [
          createTextVNode("https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6048"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("）")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("message: 旨在供作者查看。（"),
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("https://github.com/kubernetes/api/blob/6c11c9e4685cc62e4ddc8d4aaa824c46150c9148/core/v1/types.go#L6053"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("）")
      ])
    ]),
    _hoisted_24
  ]);
}
const Operatorkaifaer_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Operatorkaifaer.html.vue"]]);
export {
  Operatorkaifaer_html as default
};
