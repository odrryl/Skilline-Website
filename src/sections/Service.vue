<script setup>
import BillingIcon from '@/components/icons/BillingIcon.vue'
import ScheduleIcon from '@/components/icons/ScheduleIcon.vue'
import TrackIcon from '@/components/icons/TrackIcon.vue'
</script>

<template>
  <section class="service">
    <div class="container service__container">
      <h3 class="title">All-In-One <span>Cloud Software.</span></h3>
      <p class="desc" id="service-desc">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      <div class="service__group">
        <div class="service__block">
          <div class="service__block-circle">
            <BillingIcon />
          </div>

          <h4 class="service__block-title">Online Billing, Invoicing, & Contracts</h4>
          <p class="service__block-desc">
            Simple and secure control of your organization’s financial and legal transactions. Send
            customized invoices and contracts
          </p>
        </div>

        <div class="service__block">
          <div class="service__block-circle">
            <ScheduleIcon />
          </div>
          <h4 class="service__block-title">Easy Scheduling & Attendance Tracking</h4>
          <p class="service__block-desc">
            Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed
            records of student attendance
          </p>
        </div>

        <div class="service__block">
          <div class="service__block-circle">
            <TrackIcon />
          </div>
          <h4 class="service__block-title">Customer Tracking</h4>
          <p class="service__block-desc">
            Automate and track emails to individuals or groups. Skilline’s built-in system helps
            organize your organization
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
