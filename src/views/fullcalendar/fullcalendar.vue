<template>
    <div>

        <el-button type="primary" v-on:click="getEvents">获取数据</el-button>

        <div id="cale">
        </div>
    </div>
</template>
<script>
import fullcalendar from 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import 'fullcalendar/dist/locale/zh-cn'
import 'fullcalendar-scheduler'
import jQuery from 'jquery'
export default {
    data() {
        return {
        }
    },
    methods: {
        init() {
            let cale = jQuery('#cale');
            cale.fullCalendar({
                schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                now: '2017-09-08',
                editable: true,
                aspectRatio: 1.8,
                scrollTime: '08:00',
                minTime: '8:00',
                maxTime: '18:00',
                allDaySlot: false,
                slotLabelFormat: 'HH:mm',
                //eventLimit: true,
                dayClick: function(date, jsEvent, view, resource) {
                    if (view.name == 'month' || view.name == 'agendaWeek') {
                        cale.fullCalendar('changeView', 'timelineDay', date.format());
                    }
                    debugger
                },
                header: {
                    left: 'today prev,next',
                    center: 'title',
                    right: 'timelineDay,agendaWeek,month'
                },
                defaultView: 'timelineDay',
                views: {
                },
                resourceAreaWidth: '30%',
                resourceColumns: [
                    {
                        labelText: 'Room',
                        field: 'title'
                    }
                ],
                resources: [
                    { id: 'a', title: 'Auditorium A' },
                    { id: 'b', title: 'Auditorium B' },
                    { id: 'c', title: 'Auditorium C' },
                    {
                        id: 'd', title: 'Auditorium D', children: [
                            { id: 'd1', title: 'Room D1' },
                            { id: 'd2', title: 'Room D2' }
                        ]
                    }
                ],
                events: [
                    { id: '3', resourceId: 'd1', start: '2017-09-08T08:00:00', end: '2017-09-08T12:00:00' },
                    { id: '4', resourceId: 'd2', start: '2017-09-08T08:00:00', end: '2017-09-08T18:00:00' },
                    { id: '1', resourceId: 'a', start: '2017-09-08T08:00:00', end: '2017-09-08T12:00:00' },
                    { id: '2', resourceId: 'b', start: '2017-09-08T13:00:00', end: '2017-09-08T18:00:00' },
                    { id: '5', resourceId: 'd1', start: '2017-09-08T08:00:00', end: '2017-09-08T12:00:00' },
                    { id: '6', resourceId: 'd2', start: '2017-09-08T08:00:00', end: '2017-09-08T18:00:00' },
                    { id: '7', resourceId: 'a', start: '2017-09-08T08:00:00', end: '2017-09-08T12:00:00' },
                    { id: '8', resourceId: 'b', start: '2017-09-08T13:00:00', end: '2017-09-08T18:00:00' },

                    { id: '9', resourceId: 'd1', start: '2017-09-29T08:00:00', end: '2017-09-29T12:00:00' },
                    { id: '10', resourceId: 'd2', start: '2017-09-29T08:00:00', end: '2017-09-29T18:00:00' },
                    { id: '11', resourceId: 'a', start: '2017-09-29T08:00:00', end: '2017-09-29T12:00:00' },
                    { id: '12', resourceId: 'b', start: '2017-09-29T13:00:00', end: '2017-09-29T18:00:00' },
                    { id: '15', resourceId: 'd1', start: '2017-09-29T08:00:00', end: '2017-09-29T12:00:00' },
                    { id: '16', resourceId: 'd2', start: '2017-09-29T08:00:00', end: '2017-09-29T18:00:00' },
                    { id: '17', resourceId: 'a', start: '2017-09-29T08:00:00', end: '2017-09-29T12:00:00' },
                    { id: '18', resourceId: 'b', start: '2017-09-29T13:00:00', end: '2017-09-29T18:00:00' },



                ]
            });
        },
        getEvents: function () {
            debugger;
                let cale = jQuery('#cale');
                let events =cale.fullCalendar( 'getEventSources' )[0].rawEventDefs;
			}
    },
    mounted: function() {
        this.init()
    },
}
</script>

