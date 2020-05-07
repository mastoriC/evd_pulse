<template>
    <div>
        <div class="i-bg-vdark mvh">
            <div class="d-flex align-items-center mvh animated bounceInDown">
                <img class="w-90 w-lg-75 d-flex align-self-center mx-auto animated pulse delay-1s infinite" :src="require('./assets/logo.png')" alt="logo" draggable="false">
            </div>
            <div class="center-bottom text-center text-white animated infinite slow bounce">
                <span v-scroll-to="'#abstract'" class="cursor-pointer">
                    <div class="small font-weight-light i-text-lightgrey">readme.evd</div>
                    <b-icon-arrow-down-short class="display-4 mt-n2 mb-2 i-text-lightgrey"></b-icon-arrow-down-short>
                </span>
            </div>  
        </div>
        <div id="abstract" class="p-3 p-lg-5 mx-3 mx-lg-5">
            <div class="row py-5">
                <div class="col-12 col-lg-5 mb-5 mb-lg-0">
                    <div class="d-flex h-100">
                        <b-icon-app-indicator class="vbig m-auto"></b-icon-app-indicator>
                    </div>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="d-flex h-100">
                        <div class="indent line-height font-weight-light my-auto">
                                    อัตราการเต้นของหัวใจเป็นข้อมูลพื้นฐานที่ใช้ในทางการแพทย์ที่ใช้บ่งบอกถึงสุขภาพของหัวใจ
                            และหลอดเลือดเบื้องต้น จึงต้องมีอุปกรณ์ที่ใช้สำหรับการตรวจสอบและบันทึกผลอัตราการเต้นของหัวใจ
                            อย่างสม่ำเสมอ เพื่อใช้ประกอบการวินิจฉัยของแพทย์และทำให้ได้ผลการวินิจฉัยที่มีประสิทธิภาพ
                            มากยิ่งขึ้น จึงเป็นที่มาของการนำ NodeMCU และ Pulse Sensor Module มาพัฒนาเป็นเครื่องวัด
                            อัตราการเต้นของหัวใจ ซึ่งส่งค่าอัตราการเต้นของหัวใจโดยเฉลี่ยไปเก็บไว้ในฐานข้อมูลทุก ๆ ครั้งที่มีการใช้งาน
                            และนำมาแสดงผลบน Web Application
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="row mx-0 i-bg-white shadow-lg mb-5">
            <div class="col-12 col-lg-7">
                <div class="px-3 py-5 pl-lg-5 d-flex h-100">
                    <div class="h5 mb-0 line-height font-weight-light my-auto">
                        <div class="h4 font-weight-bold mb-4">ที่มา กระบวนการ อุปกรณ์ และการแสดงผล รวมถึงรายละเอียดต่างๆ</div>
                        <span>
                            สามารถรับชมได้ผ่าน วิดีโอนำเสนอ ที่พวกเราตั้งใจที่จะทำให้คุณมองเห็นภาพเดียวกับเรา
                            เห็นถึงความสำคัญถึงการใช้เทคโนโลยีเข้ามาช่วยดูแลสุขภาพของคุณ และนี่คือ
                        </span>
                        <span class="i-text-red">ก้าวแรกของพวกเรา</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 order-first order-lg-last embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pmwuIRbf-TE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row m-auto m-lg-5 p-auto p-lg-5 h-100">
                <div class="col-12 col-lg-6">
                    <div>
                        <div class="display-4">เว็บไซต์ ?</div>
                        <div class="h5">ดูจากที่ไหนก็ได้ อุปกรณ์ใดก็ได้</div>
                        <div class="my-5">
                            ความสามารถในการเข้าถึงข้อมูลได้ง่าย สร้างความรวดเร็วในการใช้งานให้กับคุณ
                            ขอเพียงคุณมีอินเทอร์เนตที่สามารถใช้งานได้ เราจะเข้ามาดูแลคุณ
                            โดยเฉพาะอย่างยิ่ง ในเวลาที่คุณ<span class="i-text-red">ต้องการเรา</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-8 pt-5">
                    <div class="mb-5">
                        <div class="h2 mb-4">
                            ทำสิ่งทั่วไป ให้ไกลกว่าคำว่า <span class="i-text-lightgrey">ธรรมดา</span>
                        </div>
                        <div class="mb-3">
                            ด้วยประสิทธิภาพของ NodeMCU และ Firebase สิ่งที่ดูเข้าถึงง่ายแต่ความสามารถมากมายแค่เข้าใจมัน
                            นำมาสร้างสรรค์สิ่งประดิษฐ์ที่เป็นแนวทางให้เดินต่อ กับเป้าหมายที่มากกว่าการสรรค์สร้างเพียงชั่วคราว
                        </div>
                        <div class="d-inline" v-for="logo in logos" :key="logo.index">
                            <img class="mr-3" height="48" :src="logo.href">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-lg-auto m-4 px-3 py-5 p-lg-5 w-lg-75 i-bg-grey rounded-lg">
            <div class="h2 text-center mb-5">คำถามที่อยากตอบ ._?</div>
            <div class="my-3" v-for="q in question" :key="q.index">
                <div class="i-text-grey">
                    <div class="d-inline d-lg-none">Q:</div>
                    <div>
                        <span class="d-none d-lg-inline">Q: </span>{{ q.ask }}?
                    </div>
                </div> 
                <div class="i-text-blue">
                    <div class="d-inline d-lg-none">A:</div>
                    <div>
                        <span class="d-none d-lg-inline">A: </span>{{ q.ans }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-3 my-5 m-lg-5 px-3 p-lg-5">
            <div class="h2 text-center mb-5">ทีมสุดมหัศจรรย์ของเรา</div>
            <div class="row">
                <div class="col-lg-3 my-3" v-for="m in members" :key="m.index">
                    <div class="text-center">
                        <div class="mb-2">
                            <img class="rounded-lg z-n1" :src="require('./assets/' + m.img + '.jpg')" width="100%">
                            <div id="memid" class="i-bg-dark px-3 py-1 small rounded-pill">{{ m.id }}</div>
                        </div>
                        <div>{{ m.name }}</div>
                        <div class="small font-weight-light i-text-blue">{{ m.desc }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.indent {
    text-indent: 64px;
}
.line-height {
    line-height: 2;
}
.bg-opa {
    background-color: rgba(0, 0, 0, 0.6);
}
.vbig {
    font-size: 25vh
}
#memid {
    position:absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.w-90 {
    width: 90% !important;
}
@media (min-width: 992px){
    .w-lg-75 {
        width: 75% !important;
    }
}
</style>
<script>
export default {
    data() {
        return {
            logos: [
                {href: 'https://img.icons8.com/color/50/000000/c-programming.png'},
                {href: 'https://vuejs.org/images/logo.png'},
                {href: 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg'},

            ],
            question: [
                {
                    ask: "ทำไมถึงไม่ส่งข้อมูลจากอุปกรณ์ไปให้ Firebase แบบไม่ต้องผ่าน Server",
                    ans: "เพราะการส่งโดยตรงจะทำผ่าน Protocol HTTP(S) ซึ่งทุกครั้งที่ส่งก็จะมี Header ของ HTTP ไปด้วยทำให้เกิดการ Delay ส่งผลให้ข้อมูลไม่ Real-time"
                },
                {
                    ask: "ทำไมส่งผ่าน Server ถึงไม่มี Delay",
                    ans: "เพราะใช้ Protocol Websocket ซึ่งทำการเชื่อมต่อแค่ครั้งเดียว จากนั้นสามารถส่งข้อมูลแบบไม่มี Header ได้เลย ทำให้สามารถส่งข้อมูลแบบ Real-time ได้"
                }
            ],
            members: [
                {
                    name: 'ทัสนัย ศรีสวัสดิ์',
                    id: 62070074,
                    img: '70540409_2653581341359203_8897303832048959488_n',
                    desc: 'ร่ายมนตร์เสกเว็บ',
                },
                {
                    name: 'ศุภกฤต ขาวมีวงษ์',
                    id: 62070184,
                    img: '93250586_1111096749258015_6785351340387205120_o',
                    desc: 'เลี้ยงดูอุปกรณ์'
                },
                {
                    name: 'ณัฏชยาภรณ์ เซี่ยงคิ้ว',
                    id: 62070059,
                    img: '78955355_2417996621643108_3644239914834329600_n',
                    desc: 'ตัดแปะโปสเตอร์'
                },
                {
                    name: 'นิรชา เรืองสันเทียะ',
                    id: 62070106,
                    img: '57504672_564827824007838_5151708822242328576_n',
                    desc: 'กำกับวิดีโอ'
                },
            ]
        }
    },
    created() {
        document.documentElement.style.overflow = 'auto'
    }
}
</script>
