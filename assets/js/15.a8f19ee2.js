(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{445:function(s,e,a){"use strict";a.r(e);var t=a(16),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("在使用kubernetes过程中，可以通过"),a("code",[s._v("kubectl top pod")]),s._v("  命令可以查看到各个Pod内存使用情况，从而发现与Pod进程实际使用内存不一致，具体情况如下：\n")]),s._v(" "),a("blockquote",[a("p",[s._v("Java应用部署在"),a("code",[s._v("kubernetes")]),s._v("中，配置的JVM参数为 "),a("code",[s._v("-Xmx2048m -Xms2048m")]),s._v("  Pod  memory request设置为3G， memory limit 为 4G")])]),s._v(" "),a("p",[s._v("查看目前Pod已使用内存")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl top pods         ")]),s._v("\ngateway-5bf49bcb7-7mj99           98m          3046Mi \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后我们通过top命令进行查看内存使用情况")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":29:03 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("140")]),s._v(" days, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":13,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.49")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.46")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.51")]),s._v("\nTasks:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" total,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" running,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" sleeping,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" stopped,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" zombie\n%Cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(" us,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(" sy,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" ni, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93.8")]),s._v(" id,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" wa,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" hi,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" si,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" st\nMiB Mem "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32011.6")]),s._v(" total,    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("239.0")]),s._v(" free,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13934.4")]),s._v(" used,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17838.2")]),s._v(" buff/cache\nMiB Swap:      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" total,      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" free,      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" used.  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17679.0")]),s._v(" avail Mem \n\n  PID "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND           \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7761")]),s._v(".2m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".0g  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(".2m S  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.3")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(":27.35 java             \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".3m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".7m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".5m S   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.01 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("               \n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".5m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".3m S   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.00 run.sh           \n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1349")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".8m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".2m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".6m S   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.02 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("             \n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1355")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(".5m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".8m   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".3m R   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.01 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("通过如上操作可以看出，通过"),a("code",[s._v("kubectl top pods")]),s._v("   可以看到使用内存为3046M,而通过top命令可以使用内存为2.0G，由此可以看出Pod内存要高于实际使用内存。")]),s._v(" "),a("h2",{attrs:{id:"pod内存指标详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod内存指标详解"}},[s._v("#")]),s._v(" Pod内存指标详解")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("kubectl top pods")]),s._v(" 获取监控指标数据都是 Prometheus metrics 组件来完成，接下来介绍下比较常用的监控指标；")]),s._v(" "),a("ul",[a("li",[s._v("kube_pod_container_resource_limits           Pod内存限制")]),s._v(" "),a("li",[s._v("kube_pod_container_resource_requests     Pod所需内存")]),s._v(" "),a("li",[s._v("container_memory_working_set_bytes        Pod实际使用内存，也是 limit限制时的 oom 判断依据")]),s._v(" "),a("li",[s._v("container_memory_rss                                    Pod进程使用内存")])]),s._v(" "),a("h2",{attrs:{id:"linux-缓存机制引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-缓存机制引入"}},[s._v("#")]),s._v(" Linux 缓存机制引入")]),s._v(" "),a("h3",{attrs:{id:"缓存机制介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制介绍"}},[s._v("#")]),s._v(" 缓存机制介绍")]),s._v(" "),a("p",[s._v("在Linux系统中，为了提高文件系统性能，内核利用一部分物理内存分配出缓冲区，用于缓存系统操作和数据文件，当内核收到读写的请求时，内核先去缓存区找是否有请求的数据，有的话直接返回，如果没有则通过驱动程序直接操作磁盘。")]),s._v(" "),a("p",[a("strong",[s._v("缓存机制优点：")]),s._v(" 减少系统调用次数，降低CPU上下文切换和磁盘访问频率")]),s._v(" "),a("p",[a("strong",[s._v("CPU上下文切换：")]),s._v(" CPU给每个进程一定的服务时间，当时间片用完后，内核从正在运行的进程中收回处理器，同时把进程当前运行状态保存下来，然后加载下一个任务，这个过程叫做上下文切换。实质上就是被终止运行进程与待运行进程的进程切换。")]),s._v(" "),a("h3",{attrs:{id:"查看缓存区及内存使用情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看缓存区及内存使用情况"}},[s._v("#")]),s._v(" 查看缓存区及内存使用情况")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# free -m")]),s._v("\n              total        used        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("      shared  buff/cache   available\nMem:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3790")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1914")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("126")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1750")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1579")]),s._v("\nSwap:             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("total           总内存")]),s._v(" "),a("li",[s._v("used           已使用内存")]),s._v(" "),a("li",[s._v("free              空闲内存")]),s._v(" "),a("li",[s._v("shared         多个进程共享的内存总额")]),s._v(" "),a("li",[s._v("buff/cache   缓存占用内存")]),s._v(" "),a("li",[s._v("available       可用内存大小")])]),s._v(" "),a("p",[s._v("从上面的命令结果显示中可以看出：总内存为4G, 已使用1914M，剩余126M,不少的人都是这么看的。")]),s._v(" "),a("p",[s._v("但其实这样不能作为实际的使用率，因为有了缓存机制，具体算法如下：")]),s._v(" "),a("p",[s._v("空闲内存=free（126）+buffers（0）+cached（1750）\n已用内存=total（3790）-空闲内存")]),s._v(" "),a("h3",{attrs:{id:"buffers和cached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffers和cached"}},[s._v("#")]),s._v(" buffers和cached")]),s._v(" "),a("p",[a("strong",[s._v("缓存（cached）")]),s._v(" 是把读取过的数据保存起来，重新读取时若命中 （找到需要的数据）就不要去读硬盘了，若没有命中就读硬盘。其中的数据会根据读取频率进行组织，把最频繁读取的内容放在最容易找到的位置，把不再读的内容不断往后排，直至从中删除。")]),s._v(" "),a("p",[s._v("缓冲（buffers）是根据磁盘的读写设计额，把分散的写操作集中进行，减少磁盘碎片和硬盘的反复寻道，从而提高系统性能。Linux有一个守护进程定期清理缓存内存 （即写入磁盘），也可以通过sync命令手动清空缓冲。举个例子吧：我这里有一个ext2的U盘，我往里面cp一个3M的MP3，但U盘的灯没有跳动，过了一会儿（或者手动输入sync）U盘的灯就跳动起来了。卸载设备时会清空缓冲，所以有些时候卸载一个设备时要等上几秒钟。")]),s._v(" "),a("p",[s._v("修改/etc/sysctl.conf中的vm.swappiness右边的数字可以在下次开机时调节swap使用策略。该数字范围是0～100，数字越大越倾向于使用swap。默认为60，可以改一下试试。–两者都是RAM中的数据。")]),s._v(" "),a("p",[a("strong",[a("u",[s._v("两者都是RAM中的数据，简单来说，buffer是即将要被写入磁盘的，而cache是被从磁盘读出来的")])])]),s._v(" "),a("blockquote",[a("p",[s._v("buffer是由各种进程分配的，被用在如输入队列等方面。一个简单的例子如某个进程要求有多个字段读入，在所有字段被读入完整之前，进程把先前读入的字段放在buffer中保存。\ncache经常被用在磁盘的I/O请求上，如果有多个进程都要访问某个文件，于是该文件便被做成cache以方便下次被访问，这样可提高系统性能。")])]),s._v(" "),a("p",[a("strong",[s._v("Cache：缓冲区，高速缓存，是位于CPU与主内存间的一种容量较小但速度很高的存储器。")])]),s._v(" "),a("p",[s._v("由于CPU的速度远高于主内存，CPU直接从内存中存取数据要等待一定时间周期，Cache中保存着CPU刚用过或循环使用的一部分数据，当CPU再次使用该部分数据时可从Cache中直接调用,这样就减少了CPU的等待时间,提高了系统的效率。Cache又分为一级Cache(L1 Cache)和二级Cache(L2 Cache)，L1 Cache集成在CPU内部，L2 Cache早期一般是焊在主板上,现在也都集成在CPU内部，常见的容量有256KB或512KB L2 Cache。它是根据程序的局部性原理而设计的，就是cpu执行的指令和访问的数据往往在集中的某一块，所以把这块内容放入cache后，cpu就不用在访问内存了，这就提高了访问速度。当然若cache中没有cpu所需要的内容，还是要访问内存的。"),a("strong",[s._v("从内存读取与磁盘读取角度考虑，cache可以理解为操作系统为了更高的读取效率，更多的使用内存来缓存可能被再次访问的数据。")])]),s._v(" "),a("p",[s._v("Cache并不是缓存文件的，而是缓存块的(块是I/O读写最小的单元)；Cache一般会用在I/O请求上，如果多个进程要访问某个文件，可以把此文件读入Cache中，这样下一个进程获取CPU控制权并访问此文件直接从Cache读取，提高系统性能。")]),s._v(" "),a("p",[a("strong",[s._v("Buffer：缓冲区，一个用于存储速度不同步的设备或优先级不同的设备之间传输数据的区域")]),s._v("。")]),s._v(" "),a("p",[s._v("通过buffer可以减少进程间通信需要等待的时间，当存储速度快的设备与存储速度慢的设备进行通信时，存储慢的数据先把数据存放到buffer，达到一定程度存储快的设备再读取buffer的数据，在此期间存储快的设备CPU可以干其他的事情。")]),s._v(" "),a("p",[s._v("Buffer：一般是用在写入磁盘的，例如：某个进程要求多个字段被读入，当所有要求的字段被读入之前已经读入的字段会先放到buffer中。Buffer是根据磁盘的读写设计的，把分散的写操作集中进行，减少磁盘碎片和硬盘的反复寻道，从而提高系统性能。linux有一个守护进程定期清空缓冲内容（即写入磁盘），也可以通过sync命令手动清空缓冲。")]),s._v(" "),a("p",[s._v("cache是高速缓存，用于CPU和内存之间的缓冲；\nbuffer是I/O缓存，用于内存和硬盘的缓冲；")]),s._v(" "),a("p",[s._v("cache最初用于cpu cache，主要原因是cpu 与memory，由于cpu快，memory跟不上,且有些值使用次数多，所以放入cache中，主要目的是，重复使用，并且一级\\二级物理cache速度快，\nbuffer主要用于disk与 memory，主要是保护硬盘或减少网络传输的次数（内存数据表现dataSet）．当然也可以提高速度（不会立即写入硬盘或直接从硬盘中读出的数据马上显示），重复使用，最初最主要的目的是保护disk,")]),s._v(" "),a("p",[s._v("Free中的buffer和cache：（它们都是占用内存）：\nbuffer : 作为buffer cache的内存，是块设备的读写缓冲区\ncache: 作为page cache的内存, 文件系统的cache")]),s._v(" "),a("p",[s._v("如果 cache 的值很大，说明cache住的文件数很多。如果频繁访问到的文件都能被cache住，那么磁盘的读IO bi会非常小。")]),s._v(" "),a("p",[a("strong",[a("u",[s._v("下面通过一些简单通俗的例子来说明下Cache和Buffer缓存之间的区别：")])])]),s._v(" "),a("p",[a("strong",[s._v("1）Cache缓存")])]),s._v(" "),a("blockquote",[a("p",[s._v("假设某地发生了自然灾害（比如地震），居民缺衣少食，于是派救火车去给若干个居民点送水。救火车到达第一个居民点，开闸放水，老百姓就拿着盆盆罐罐来接水。假如说救火车在一个居民点停留100分钟放完了水，然后重新储水花半个小时，再开往下一个居民点。这样一个白天来来来回回的，也就是4-5个居民点。")])]),s._v(" "),a("p",[s._v("但我们想想，救火车是何等存在，如果把水龙头完全打开，其强大的水压能轻易冲上10层楼以上， 10分钟就可以把水全部放完。但因为居民是拿盆罐接水，100%打开水龙头那就是给人洗澡了，所以只能打开一小部分（比如10%的流量）。但这样就降低了放水的效率（只有原来的10%了），10分钟变100分钟。")]),s._v(" "),a("p",[s._v("那么，我们是否能改进这个放水的过程，让救火车以最高效率放完水、尽快赶往下一个居民点呢？\n方法就是：在居民点建蓄水池。\n救火车把水放到蓄水池里，因为是以100%的效率放水，10分钟结束然后走人。居民再从蓄水池里一点一点的接水。")]),s._v(" "),a("p",[s._v("我们分析一下这个例子，就可以知道Cache的含义了。")]),s._v(" "),a("blockquote",[a("p",[s._v('救火车要给居民送水，居民要从救火车接水，就是说居民和救火车之间有交互，有联系。\n但救火车是"高速设备"，居民是"低速设备"，低速的居民跟不上高速的救火车，所以救火车被迫降低了放水速度以适应居民。\n为了避免这种情况，在救火车和居民之间多了一层"蓄水池（也就是Cache）"，它一方面以100%的高效和救火车打交道，另一方面以10%的低效和居民打交道，这就解放了救火车，让其以最高的效率运行，而不被低速的居民拖后腿，于是救火车只需要在一个居民点停留10分钟就可以了。\n所以说，蓄水池是"活雷锋"，把高效留给别人，把低效留给自己。把10分钟留给救火车，把100分钟留给自己。')])]),s._v(" "),a("p",[s._v('从以上例子可以看出，所谓Cache，就是"为了弥补高速设备和低速设备之间的矛盾"而设立的一个中间层。因为在现实里经常出现高速设备要和低速设备打交道，结果被低速设备拖后腿的情况。Cache的存在是为了解决什么问题？速度太慢了，要'),a("strong",[s._v("加快速度！")])]),s._v(" "),a("p",[s._v('以PC为例。CPU速度很快，但CPU执行的指令是从内存取出的，计算的结果也要写回内存，但内存的响应速度跟不上CPU。CPU跟内存说：你把某某地址的指令发给我。内存听到了，但因为速度慢，迟迟不见指令返回，这段时间，CPU只能无所事事的等待了。这样一来，再快的CPU也发挥不了效率。\n怎么办呢？在CPU和内存之间加一块"蓄水池"，也就是Cache（片上缓存），这个Cache速度比内存快，从Cache取指令不需要等待。当CPU要读内存的指令的时候先读Cache再读内存，但一开始Cache是空着的，只能从内存取，这时候的确是很慢，CPU需要等待。但从内存取回的不仅仅是CPU所需要的指令，还有其它的、当前不需要的指令，然后把这些指令存在Cache里备用。CPU再取指令的时候还是先读Cache，看看里面有没有所需指令，如果碰巧有就直接从Cache取，不用等待即可返回（命中），这就解放了CPU，提高了效率。（当然不会是100%命中，因为Cache的容量比内存小）')]),s._v(" "),a("p",[a("strong",[s._v("2）Buffer缓存")])]),s._v(" "),a("blockquote",[a("p",[s._v('比如说吐鲁番的葡萄熟了，要用大卡车装葡萄运出去卖果园的姑娘采摘葡萄，当然不是前手把葡萄摘下来,后手就放到卡车上，而是需要一个中间过程"箩筐"：摘葡萄→放到箩筐里→把箩筐里的葡萄倒入卡车。也就是说，虽然最终目的是"把葡萄倒入卡车"，但中间必须要经过"箩筐"的转手，这里的箩筐就是Buffer。是"暂时存放物品的空间"。\n注意2个关键词：暂时，空间\n再换句话说，为了完成最终目标：把葡萄放入卡车的空间，需要暂时把葡萄放入箩筐的空间。')])]),s._v(" "),a("blockquote",[a("p",[s._v('以BT为例，BT下载需要长时间的挂机，电脑就有可能24小时连轴转，但BT下载的数据是碎片化的，体现在硬盘写入上也是碎片化的，因为硬盘是机械寻址器件，这种碎片化的写入会造成硬盘长时间高负荷的机械运动，造成硬盘过早老化损坏，当年有大量的硬盘因为BT下载而损坏。于是新出的BT软件在内存里开辟了Buffer，数据暂时写入Buffer，攒到一定的大小（比如512M）再一次性写入硬盘，这种"化零为整"的写入方式大大降低了硬盘的负荷。这就是：为了完成最终目标：把数据写入硬盘空间，需要暂时写入Buffer的空间。')])]),s._v(" "),a("p",[a("strong",[s._v("3）二者之间的区别总结")])]),s._v(" "),a("p",[s._v("Cache和Buffer的相同点：都是2个层面之间的中间层，都是内存。\nCache和Buffer的不同点：Cache解决的是时间问题，Buffer解决的是空间问题。\n为了提高速度，引入了Cache这个中间层。\n为了给信息找到一个暂存空间，引入了Buffer这个中间层。\n为了解决2个不同维度的问题（时间、空间），恰巧取了同一种解决方法：加入一个中间层，先把数据写到中间层上，然后再写入目标。\n这个中间层就是内存“RAM”，既然是存储器就有2个参数：写入的速度有多块（速度），能装多少东西（容量）\nCache利用的是RAM提供的高读写速度，Buffer利用的是RAM提供的存储容量（空间）。")]),s._v(" "),a("p",[a("strong",[s._v("简言之：")])]),s._v(" "),a("ul",[a("li",[s._v("Buffer（缓冲区）是系统两端处理速度平衡（从长时间尺度上看）时使用的。它的引入是为了减小短期内突发I/O的影响，起到流量整形的作用。比如生产者——消费者问题，他们产生和消耗资源的速度大体接近，加一个buffer可以抵消掉资源刚产生/消耗时的突然变化。")]),s._v(" "),a("li",[s._v("Cache（缓存）则是系统两端处理速度不匹配时的一种折衷策略。因为CPU和memory之间的速度差异越来越大，所以人们充分利用数据的局部性（locality）特征，通过使用存储系统分级（memory hierarchy）的策略来减小这种差异带来的影响。")]),s._v(" "),a("li",[s._v("假定以后存储器访问变得跟CPU做计算一样快，cache就可以消失，但是buffer依然存在。比如从网络上下载东西，瞬时速率可能会有较大变化，但从长期来看却是稳定的，这样就能通过引入一个buffer使得OS接收数据的速率更稳定，进一步减少对磁盘的伤害。")])]),s._v(" "),a("h2",{attrs:{id:"pod进程内存缓存解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod进程内存缓存解释"}},[s._v("#")]),s._v(" Pod进程内存缓存解释")]),s._v(" "),a("p",[s._v("目前已经对Linux缓存已有了大概了解，接下来我们对Pod内存进行分析了！")]),s._v(" "),a("blockquote",[a("p",[s._v("首先我们通过"),a("code",[s._v("kubectl top pods")]),s._v(" 查看的内存指标对应的是 Prometheus metrics 组件的"),a("code",[s._v("container_memory_working_set_bytes")]),s._v(" 指标（进程缓存使用内存 + 进程使用内存），在kubernetes集群中同时做为Pod HPA弹性伸缩与 limit限制(oom)的判断依据，当Pod内存即将达到内存限制则会回收内存。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl top pods         ")]),s._v("\n\ngateway-5bf49bcb7-7mj99           98m          3046Mi \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("可以设想下，假如limit限制的判断依据为进程实际使用内存，则Pod进程实际使用内存肯定大于限制内存，这样会出现什么情况呢？")])]),s._v(" "),a("p",[s._v("答：如上情况，会导致Pod内存得不到限制，cache缓存无限使用内存，得不到合理的回收。所以Pod limit限制使用"),a("code",[s._v("container_memory_working_set_bytes")]),s._v(" 指标（进程缓存使用内存 + 进程使用内存）做为判断依据再好不过了")])])}),[],!1,null,null,null);e.default=n.exports}}]);