<style>
  .my-toolbar {
    margin-bottom: 20px;
  }
  
  .dashboard-card {
  height: 150px; /* Update the height as per your requirement */
  width: 100%;
  font-size: 18px;
  padding: 10px;
  border-radius: 50%; /* Make the border-radius 50% to make the card circular */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

  
  .dashboard-card:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  
  .dashboard-card span {
    font-weight: 500;
  }
</style>
<template>
  <v-container fluid>
    <v-row>
      <student-navigation></student-navigation>
      <v-col>
        <v-toolbar class="my-toolbar">
          <v-toolbar-title>Student Dashboard</v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_attendance_grade">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-school</v-icon>
                <span>Academic Status</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_schedule">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-calendar-clock</v-icon>
                <span>Schedule</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_payment">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-currency-usd</v-icon>
                <span>Payments</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_activities">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-play-circle</v-icon>
                <span>New Activities</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_attendance">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-account-check</v-icon>
                <span>Attendance</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item to="/student_files">
              <v-btn class="dashboard-card" color="primary">
                <v-icon class="mr-2">mdi-file-multiple</v-icon>
                <span>My Files</span>
              </v-btn>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="10" style="padding-left:10rem">
                <v-hover>
                  <v-card class="mx-auto" max-width="600">
                    <v-card-title class="text-h5">Recent Announcements</v-card-title>
                    <v-card-text>
                      <v-list>
                        <v-list-item v-if="announcements.length > 0">
                          <v-list-item-content>
                            <v-list-item-title class="text-h6">{{ announcements[0].title }}</v-list-item-title>
                            <v-list-item-subtitle class="text-caption">{{ new Date(announcements[0].created_at).toLocaleString() }}</v-list-item-subtitle>
                            <v-list-item-subtitle>{{ announcements[0].body }}</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-btn color="primary" text :to="'/announcement_posts'">Read More</v-btn>
                          </v-list-item-action>
                        </v-list-item>
                        <v-list-item v-else>
                          <v-list-item-content>
                            <v-list-item-title class="text-h6">No announcements found</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>

                </v-hover>
              </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-container>
</template>
  
  <script>
  export default {
    components:{
      StudentNavigation: StudentNavigation,
    },
  };
  </script>
  <script>
  export default {
    data() {
        return {
      notifications: [],
          announcements: [],
        }
    },
    created() {
        fetch("/api/announcements")
        .then(response => response.json())
        .then(data => {
          this.announcements = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        });
        },
  }
  </script>
  <style>
.dashboard-card {
  padding: 20px;
  width: 100%;
  text-align: left;
}

.dashboard-card:hover {
  background-color: #eeeeee;
  cursor: pointer;
}
</style>