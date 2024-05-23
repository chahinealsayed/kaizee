<script setup lang="ts">
import Button from "@/modules/bootstrap/components/Button.vue";
import StringInput from "@/modules/form/components/StringInput.vue";
import SelectInput from "@/modules/form/components/SelectInput.vue";
import TextInput from "@/modules/form/components/TextInput.vue";
import { createModel } from "@/modules/form/hooks/model";
import { Field } from "@/modules/form/lib/field";
import { Model } from "@/modules/form/lib/model";
import { RequiredRule } from "@/modules/form/rules/required";
import { StringRule } from "@/modules/form/rules/string";
import { mdiAccount, mdiFormTextboxPassword, mdiSend } from "@mdi/js";
import { onMounted, onUnmounted, ref } from "vue";
import Icon from "@/components/Icon.vue";
import { api } from "@/lib/api";
import { metadata, translate } from "@/lib/metadata";
import { isDark } from "@/modules/theme";
import RecaptchaInput from "@/modules/form/components/RecaptchaInput.vue";

import App from "vue";
import { successToast } from "@/modules/bootstrap/lib/toast";
type Props = {
    redirectUrl?: string;
};
const { redirectUrl = "" } = defineProps<Props>();

class ContactForm extends Model {
    get program(): Field {
        return this.field("program", translate("Select Program*"), this.initData?.program ?? "");
    }
    get name(): Field {
        return this.field("name", translate("Name*"), this.initData?.name ?? "");
    }
    get email(): Field {
        return this.field("email", translate("Email Address*"), this.initData?.email ?? "");
    }
    get website(): Field {
        return this.field("website", translate("Website Address"), this.initData?.website ?? "");
    }
    get CompanyName(): Field {
        return this.field("CompanyName", translate("Company Name"), this.initData?.CompanyName ?? "");
    }
    get title(): Field {
        return this.field("title", translate("Title"), this.initData?.title ?? "");
    }
    get address(): Field {
        return this.field("address", translate("Address"), this.initData?.address ?? "");
    }
    get language(): Field {
        return this.field("language", translate("Language*"), this.initData?.language ?? "");
    }
    get country(): Field {
        return this.field("country", translate("Country*"), this.initData?.country ?? "");
    }
    get phone(): Field {
        return this.field("phone", translate("Phone Number*"), this.initData?.phone ?? "");
    }
    get recaptcha(): Field {
        return this.field(
            "recaptcha",
            translate("ReCaptcha"),
            this.initData?.recaptcha ?? ""
        );
    }

    get rules(): any[] {
        return [
            [[this.name, this.phone, this.email], StringRule],
            [[this.name, this.email, this.phone, this.program, this.country, this.language], RequiredRule],
        ];
    }
}
// const button = ref<any>(null);

const [model, newModel, destroyModel] = createModel(ContactForm);

const send = () => {
    model.value?.validate()?.then((valid: boolean) => {
        if (valid) {
            //   button.value?.start?.();
            api()
                .post("/contact", model.value?.data ?? {})
                .then(({ data }: any) => {
                    successToast('Form Sent');
                    console.log(model.value?.data);
                })
                .catch((err) => {
                    model.value?.addRemoteErrors?.(err);
                })
                .finally(() => {
                    //   button.value?.stop?.();
                });
        }
    });
};

onMounted(() => {
    newModel();
});

onUnmounted(() => {
    destroyModel();
});
</script>
<template>
    <form v-if="model" @submit.prevent="send" class="contact-form-vue">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-10">
                <div class="cont">
                    <div class="contact-title">
                        <p>Enquire Now. Fill in this form below <br>
                            And we will get back to you soon</p>
                    </div>
                    <SelectInput :field="model.program" :class="'program'" no-label :options="[
                        { value: '', label: 'Select Program*' },
                        { value: 'Top Management', label: 'Top Management' },
                        { value: 'Front Line Employees', label: 'Front Line Employees' },
                        { value: 'Idea Campaigns', label: 'Idea Campaigns' }
                    ]"></SelectInput>
                    <StringInput :field="model.name" :class="'name'" no-label> </StringInput>
                    <StringInput :field="model.email" :class="'mail'" no-label> </StringInput>
                    <StringInput :field="model.website" :class="'website'" no-label> </StringInput>
                    <StringInput :field="model.CompanyName" :class="'company'" no-label> </StringInput>
                    <StringInput :field="model.title" :class="'title'" no-label> </StringInput>
                    <StringInput :field="model.address" :class="'address'" no-label> </StringInput>
                    <StringInput :field="model.language" :class="'language'" no-label> </StringInput>
                    <StringInput :field="model.country" :class="'country'" no-label> </StringInput>
                    <StringInput :field="model.phone" :class="'number'" no-label> </StringInput>
                    <TextInput :placeholder="'Your message*'" :field="model.message" :class="'message'" no-label
                        aria-placeholder="Message*"></TextInput>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-10">
                <div class="cont">
                    <div class="submit-captcha pt-4">
                        <div>
                            <Button type="submit" color="" class="submit btn-gradient-2" ref="button">
                                {{ translate("Submit") }}
                            </Button>
                        </div>
                        <div class="recaptcha">
                            <RecaptchaInput :field="model.recaptcha"></RecaptchaInput>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<style lang="scss">
.contact-form-vue {
    padding-top: 4rem;
    padding-bottom: 4rem;

    @media (max-width: 767px) {
        padding-bottom: 3rem;
    }

    .col-md-10 {
        .cont {
            padding-left: 36px;

            .contact-title {
                font-size: 30px;
                padding-bottom: 2rem;

                @media (max-width: 767px) {
                    font-size: 20px;
                }
            }

            @media (max-width: 767px) {
                padding-left: 0;
            }
        }
    }

    .form-control {
        border: 0;
        padding: 0;
    }

    .field-wrapper-email,
    .field-wrapper-CompanyName,
    .field-wrapper-name,
    .field-wrapper-title,
    .field-wrapper-phone,
    .field-wrapper-website,
    .field-wrapper-address,
    .field-wrapper-country,
    .field-wrapper-language,
    .field-wrapper-program {
        padding-bottom: 2rem;

        @media (max-width: 767px) {
            padding-bottom: 1rem;
        }

        .input-group {

            select {
                border-bottom: solid 2px #09736E;
                border-radius: 0;
                padding-bottom: 5px;
                background: transparent;
                color: rgb(19, 160, 65);
                font-size: 18px;

                &::placeholder {
                    color: #6C757D;
                    font-weight: 300;
                }

                &:focus {
                    outline: none;
                    box-shadow: 0px 0px;
                    border-bottom: solid 2px rgb(19, 160, 65);
                }
            }

            input {
                border-bottom: solid 2px #09736E;
                border-radius: 0;
                padding-bottom: 5px;
                background: transparent;
                color: rgb(19, 160, 65);
                font-size: 18px;

                &::placeholder {
                    color: #6C757D;
                    font-weight: 300;
                }

                &:focus {
                    outline: none;
                    box-shadow: 0px 0px;
                    border-bottom: solid 2px rgb(19, 160, 65);
                }
            }
        }
    }



    .submit {
        background: linear-gradient(90deg, #13A041 0%, #13A041 9%, #09736E 68%, #09736E 91%);
        color: #ffffff;
        border: none;
        box-shadow: none !important;
        border-radius: 24px;
        padding-top: 0.5rem;
        padding-bottom: 0.6rem;
        padding-left: 5rem;
        padding-right: 5rem;
        font-size: 18px;

        &:hover {
            background: linear-gradient(90deg, #09736E 0%, #09736E 9%, #13A041 68%, #13A041 91%);
        }
    }
}

.submit-captcha {
    display: flex;
    justify-content: space-between;

    @media (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-flow: column-reverse;
    }
}
</style>