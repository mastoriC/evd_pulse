<template>
    <div>
        <div class="p-5 m-5">
            <div class="row">
                <div class="col-5">
                    <div>
                        <div class="display-4 mb-2 font-weight-bold">Everyday Pulse</div>
                        <div class="h4 font-weight-light i-text-grey">หัวใจเต้นแรง <span class="i-text-red">หน้าแดง</span>ทุกที</div>
                    </div>
                </div>
                <div class="col-7">
                    <div class="indent line-height font-weight-light">
                            อัตราการเต้นของหัวใจเป็นข้อมูลพื้นฐานที่ใช้ในทางการแพทย์ที่ใช้บ่งบอกถึงสุขภาพของหัวใจ
                        และหลอดเลือดเบื้องต้น จึงต้องมีอุปกรณ์ที่ใช้สำหรับการตรวจสอบและบันทึกผลอัตราการเต้นของหัวใจ
                        อย่างสม่ำเสมอ เพื่อใช้ประกอบการวินิจฉัยของแพทย์และทำให้ได้ผลการวินิจฉัยที่มีประสิทธิภาพ
                        มากยิ่งขึ้น จึงเป็นที่มาของการนำ NodeMCU และ Pulse Sensor Module มาพัฒนาเป็นเครื่องวัด
                        อัตราการเต้นของหัวใจ ซึ่งส่งค่าอัตราการเต้นของหัวใจโดยเฉลี่ยไปเก็บไว้ในฐานข้อมูลทุก ๆ ครั้งที่มีการ
                        ใช้งาน และนำมาแสดงผลบน Web Application
                    </div>
                </div>
            </div>
        </div>
        <div class="row i-bg-dark shadow-lg">
            <div class="col-7 p-5">
                <div class="pl-5">
                    <div class="h5 line-height font-weight-light">
                        ที่มา กระบวนการ อุปกรณ์ และการแสดงผล รวมถึงรายละเอียดต่างๆ สามารถรับชมได้ผ่าน วิดีโอนำเสนอ ที่พวกเราตั้งใจที่จะทำ
                        ให้คุณมองเห็นภาพเดียวกับเรา เห็นถึงความสำคัญถึงการใช้เทคโนโลยีเข้ามาช่วยดูแลสุขภาพของคุณ และนี่คือ
                        <span class="i-text-blue font-weight-bold">ก้าวแรกของพวกเรา</span>
                    </div>
                </div>
            </div>
            <div class="col-5 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pmwuIRbf-TE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
</style>
<script>
export default {
    created() {
        document.documentElement.style.overflow = 'auto'
        document.documentElement.style.overflowX = 'hidden'
    }
}
</script>
