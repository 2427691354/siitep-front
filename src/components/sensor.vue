<template>
  <div class="bg">
    <el-row :gutter="20">
      <el-col :span="8">
        <!-- 气瓶左 -->
        <div class="grid-content bg-purple">
          <!-- 左上 -->
          <div class="top">
            <!-- 左上左 -->
            <div class="top_left">气瓶（26）</div>
            <!-- 左上右 -->
            <div class="top_right">
              <img src="../assets/greenSensor-S.png" alt width="15px" />
              正常
              <img src="../assets/yellowSensor-S.png" alt width="15px" />
              低压
              <img src="../assets/redSensor-S.png" alt width="15px" />
              高压
            </div>
          </div>
          <!-- 气瓶左主体 -->
          <div class="main">
            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img" >
                  <img src="../assets/greenSensor-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">启动瓶X1</span>
                  <br />
                  <strong class="allowance">5.931Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">启动瓶X2</span>
                  <br />
                  <strong class="allowance">5.431Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">启动瓶X3</span>
                  <br />
                  <strong class="allowance">6.044Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">启动瓶X4</span>
                  <br />
                  <strong class="allowance">5.806Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>

            <!-- 一行 -->
            <div class="main_item_line">
              <!-- 行左 -->
              <div class="main_item left">
                <div class="main_item_img">
                  <img src="../assets/greenSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X5</span>
                  <br />
                  <strong class="allowance">16.063Mpa</strong>
                </div>
              </div>
              <!-- 行右 -->
              <div class="main_item right">
                <div class="main_item_img">
                  <img src="../assets/yellowSensor-C-L.png" alt width="50px" />
                </div>
                <div class="main_item_text">
                  <span class="name">储气瓶X6</span>
                  <br />
                  <strong class="allowance">13.1Mpa</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
          <!-- 气瓶右 -->
        <div class="grid-content bg-purple">
            <!-- 右上 -->
          <div class="top">
            <div class="top_left">趋势图</div>
          </div>
          <!-- 右下趋势图 -->
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style  scoped>
.allowance {
  color: #686766;
}
.name {
  color: #a6a6a6;
}
.main_item_img {
  float: left;
 
 
}
.main_item_text {
  width: 70px;
  float: left;
  padding-top: 10px;
}
.right {
  float: right;
}
.left {
  float: left;
}
.main_item_line {
  width: 100%;
  
}
.main_item {
  width: 45%;
  height: 80px;
  padding-top: 20px;
  padding-left: 10px;
}
.main {
  padding: 10px 20px;
  overflow: auto;
  width: 90%;
  height: 400px;
}
.top_right {
  height: 50px;
  padding-top: 15px;
  padding-right: 20px;
  float: right;
}
.top_left {
  height: 50px;
  padding-top: 15px;
  padding-left: 20px;
  float: left;
}

.top {
  height: 50px;
  border-bottom: 1px solid #e7ecf6;
}
.bg {
  width: 100%;
  height: 100%;
  background: #eff1f4;
  position: fixed;
}
.el-row {
  margin: 20px 0;
}
.el-col {
  border-radius: 1px;
  margin: 0 10px;
}

.bg-purple {
  background: #ffffff;
  height: 500px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  box-shadow: 5px 5px 5px #b6b4b6;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>