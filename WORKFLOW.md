# WORKFLOW.md

## Feature: Settings Form with Validation

## Round 1 (Vague prompt)

The vague prompt produced a form page, directly replacing the contents of the default page (Home page).
It has basic HTML5 tags with no accessibility properties or attributes.
The form has several additional form values such as:

- confirm password
- timezone
- notifications (as a text of intervals e.g. weekly, daily, etc.)

The password validation logic has extra check criteria. It checked for special characters, capital letter and numbers.
The form has a details component section that displays the data entered by the user.
There is an isSubmitted state in the form to notify the user of a successful upload.

## Round 2 (precise prompt)

The precise prompt created a new route called the form-v2 route with a page.tsx inside.
The page.tsx imported a component; SettingsFormV2 from the /components folder that was created by the prompt.
The HTML5 tags were built with accessibility in mind. Each has all accessibility properties/attributes such as:

- htmlFor for Labels
- ARIA
- type for Buttons
- id

The SettingsFormV2 has a unit test-suit to validate 4 criteria which are:

1. shows inline errors for empty submission
2. shows an error for an invalid email
3. shows an error for a short password
4. logs valid form data on submit

The form prevents the submission of the data entered on any error encountered, and if valid, logs the data entered to the console.
It has no success state for submission aside the logging to console.
