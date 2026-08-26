import {registry} from "@web/core/registry";

registry.category("web_tour.tours").add("mis_report_annotation_tour", {
    steps: () => [
        {
            trigger: "[data-bs-toggle='dropdown']",
            run: "click",
        },
        {
            trigger: "a.dropdown-item:contains('Annotate')",
            run: "click",
        },
        {
            trigger: "textarea.form-control",
            run: "edit Test Annotation Note",
        },
        {
            trigger: "button:contains('Confirm')",
            run: "click",
        },
        {
            trigger: "#footnotes:contains('Test Annotation Note')",
        },
    ],
});
