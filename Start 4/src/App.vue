<template>
    <div class="container">
        <form v-if="!isSubmit">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label>email</label>
                        <input type="text" class="form-control" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <div class="form-group">
                        <label><input type="radio" value="Yes" id="yesStore" v-model="isStore">Yes</label>
                        <label><input type="radio" value="No" id="noStore" v-model="isStore">No</label>
                    </div>
                    <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Submit Form</button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{firstName}} {{lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{isStore}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';
    export default {
        data() {
            return {
                fullName: 'Radha Raman',
                email: '',
                password: '',
                isStore: 'Yes',
                isSubmit: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmit = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
