/*********************************************************************
 * Functionalities of the "Share Link Generator" page
 * 
 * @author (Anyanwu Benedict Chuwkwuemeka)
 * @version 0.01
*********************************************************************/



const scl_opt = 
{
    "scl_fb": 
    {
        "title": "Facebook",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            }
        ]
    },
    "scl_tx": 
    {
        "title": "Twitter/X",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "txt",
                "name": "Your tweet",
                "type": "multi",
                "required": false
            },
        ]
    },
    "scl_bs": 
    {
        "title": "BlueSky",
        "icon": "",
        "fields":
        [
            {
                "id": "txt",
                "name": "Your post",
                "type": "multi",
                "required": true
            }
        ]
    },
    "scl_li": 
    {
        "title": "LinkedIn",
        "icon": "",
        "fields":
        [
            {
                "id": "ttl",
                "name": "Title",
                "type": "text",
                "required": true
            },
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
        ]
    },
    "scl_wa": 
    {
        "title": "WhatsApp",
        "icon": "",
        "fields":
        [
            {
                "id": "ttl",
                "name": "Title",
                "type": "text",
                "required": true
            },
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
        ]
    },
    "scl_pn": 
    {
        "title": "Pinterest",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "img",
                "name": "Thumbnail Image URL",
                "type": "url",
                "required": false
            },
            {
                "id": "txt",
                "name": "Your text",
                "type": "multi",
                "required": false
            },
        ]
    },
    "scl_rd": 
    {
        "title": "Reddit",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "txt",
                "name": "Your post",
                "type": "multi",
                "required": false
            },
        ]
    },
    "scl_tg": 
    {
        "title": "Telegram",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "txt",
                "name": "Your message",
                "type": "multi",
                "required": false
            },
        ]
    },
    "scl_tb": 
    {
        "title": "Tumblr",
        "icon": "",
        "fields":
        [
            {
                "id": "ttl",
                "name": "Title",
                "type": "text",
                "required": true
            },
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "txt",
                "name": "Caption",
                "type": "multi",
                "required": true
            },
        ]
    },
    "scl_yh": 
    {
        "title": "Yahoo",
        "icon": "",
        "fields":
        [
            {
                "id": "txt",
                "name": "Your message",
                "type": "multi",
                "required": true
            }
        ]
    },
    "scl_ln": 
    {
        "title": "Line",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            }
        ]
    },
    "scl_ok": 
    {
        "title": "OK.RU",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            },
            {
                "id": "txt",
                "name": "Your post",
                "type": "multi",
                "required": true
            },
        ]
    },
    "scl_vk": 
    {
        "title": "ВКонтакте",
        "icon": "",
        "fields":
        [
            {
                "id": "url",
                "name": "Link URL",
                "type": "url",
                "required": true
            }
        ]
    },
    "scl_gm": 
    {
        "title": "Gmail",
        "icon": "",
        "fields":
        [
            {
                "id": "rcp",
                "name": "Recipient",
                "type": "email",
                "required": true
            },
            {
                "id": "sbj",
                "name": "Subject",
                "type": "text",
                "required": false
            },
            {
                "id": "cc",
                "name": "CC",
                "type": "email",
                "required": false
            },
            {
                "id": "bcc",
                "name": "BCC",
                "type": "email",
                "required": false
            },
            {
                "id": "bdy",
                "name": "Body",
                "type": "multi",
                "required": false
            },
        ]
    },
    "scl_em": 
    {
        "title": "Email",
        "icon": "",
        "fields":
        [
            {
                "id": "rcp",
                "name": "Recipient",
                "type": "email",
                "required": true
            },
            {
                "id": "sbj",
                "name": "Subject",
                "type": "text",
                "required": false
            },
            {
                "id": "cc",
                "name": "CC",
                "type": "email",
                "required": false
            },
            {
                "id": "bcc",
                "name": "BCC",
                "type": "email",
                "required": false
            },
            {
                "id": "bdy",
                "name": "Body",
                "type": "multi",
                "required": false
            },
        ]
    },
};



    window.onload = () => 
    {
        //
        const formCallBtns = document.querySelectorAll(".optBtn");

        formCallBtns.forEach((btn) => 
        {
            btn.onclick = () => 
            {
                buildForm((btn.getAttribute("data-form") || ""));
            }
        });
    }


    // Build Form
    function buildForm(req_id = "")
    {
        try
        {
            const req_obj = scl_opt[`scl_${req_id.toLowerCase()}`] || {};
            const formBdr = document.querySelector(".form_bdr");

            // Return if id is invalid or the foundation is unavailable
            if((Object.entries(req_obj).length <= 0) || (req_id === "") || (typeof formBdr === "undefined")) return alert("Option may be unavailable");

            // Create the form
            const formName = req_obj.title.toLowerCase().trim().replace(/\s+/g, "");
            const formBox = document.createElement("div");
            formBox.className = "form_box";
            formBox.innerHTML = 
            `
                <h3 class="form_hdr">${req_obj.title}</h3>
                <form action="#" name="formName" class="form_elem" id="${formName}_id">
                    <button type="submit" id="form_sbt_btn" class="form_atn_btn">Generate Link</button>
                    <div class="form_rslt_bdr">
                        <div class="form_rslt_bcg">
                            <div class="form_rslt_box">
                                <p class="form_fld_ttl">URL only</p>
                                <div class="form_fld_wrapper">
                                    <textarea name="form_rslt_dflt_link" id="form_rslt_dflt_link" class="form_fld_box form_fld_txtar" onclick="this.select()" placeholder="The generated URL will appear here" readonly></textarea>
                                </div>
                                <p class="form_fld_ttl">HTML Link</p>
                                <div class="form_fld_wrapper">
                                    <textarea name="form_rslt_html_link" id="form_rslt_html_link" class="form_fld_box form_fld_txtar" onclick="this.select()" placeholder="The generated HTML link will appear here" readonly></textarea>
                                </div>
                                <button type="reset" id="form_rst_btn" class="form_atn_btn" >Reset Form</button>
                            </div>
                        </div>
                    </div>
                </form>
            `;

            const formElem = formBox.querySelector("form");
            const formDfltRslt = formElem.querySelector("#form_rslt_dflt_link");
            const formHTMLRslt = formElem.querySelector("#form_rslt_html_link");
            let formElStruct = ``;

            // Build the form fields
            formElStruct = req_obj.fields.map((fld) => 
            {
                if((fld.type === "multi"))
                {
                    const inp_fld = document.createElement("textarea");
                    inp_fld.className = "form_fld_box form_fld_txtar";

                    return`
                        <p class="form_fld_ttl">${fld.name}</p>
                        <div class="form_fld_wrapper">
                            <textarea name="${req_id}_${fld.id}" id="${req_id}_${fld.id}" class="form_fld_box form_fld_txtar" placeholder="Enter text here"></textarea>
                        </div>
                    `;
                }
                else
                {
                    const inp_fld = document.createElement("input");
                    inp_fld.id = `${req_id}_${fld.id}`;
                    inp_fld.name = `${req_id}_${fld.id}`;
                    inp_fld.className = "form_fld_box form_fld_inp";
                    inp_fld.dataset.required = fld.required;

                    switch(fld.type)
                    {
                        case 'text':
                            inp_fld.type = "text";
                            inp_fld.placeholder = "Enter text here";
                            break;

                        case 'url':
                            inp_fld.type = "text";
                            inp_fld.placeholder = "Enter URL here";
                            inp_fld.inputMode = "url";
                            break;
                            
                        case 'email':
                            inp_fld.type = "email";
                            inp_fld.placeholder = "Enter email here";
                            inp_fld.inputMode = "email";
                            break;

                        default:
                            throw new Error("Unknown field type");
                    }

                    return`
                        <p class="form_fld_ttl">${fld.name}</p>
                        <div class="form_fld_wrapper">${inp_fld.outerHTML}</div>
                    `;
                }
            }).join("");

            // Insert the fields into the form
            formElem.insertAdjacentHTML("afterbegin", formElStruct);

            // Insert into the DOM
            formBdr.innerHTML = "";
            formBdr.appendChild(formBox);

            // Prevents unintended submissions
            const allFormFields = formElem.querySelectorAll("input");
            allFormFields.forEach((fld) => 
            {
                fld.addEventListener("keydown", (e) => 
                {
                    if((typeof e !== "undefined") && (typeof e.key !== "undefined") && (e.key.toLowerCase() === "enter")) 
                        e.preventDefault();
                });
            });

            // Generate links on submission
            formElem.onsubmit = (e) => 
            {
                e.preventDefault();

                let shrLnk = ``;

                // Structure link accordingly
                switch(req_id)
                {
                    case 'fb':
                        const fb_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        shrLnk = `https://www.facebook.com/sharer/sharer.php?u=${fb_url}`;
                        break;
                        
                    case 'tx':
                        const tx_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const tx_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://twitter.com/intent/tweet?url=${tx_url}&text=${tx_txt}`;
                        break;
                        
                    case 'bs':
                        const bs_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://bsky.app/intent/compose?text=${bs_txt}`;
                        break;
                        
                    case 'li':
                        const li_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const li_ttl = encodeURIComponent(formElem.querySelector(`#${req_id}_ttl`).value);
                        shrLnk = `http://www.linkedin.com/shareArticle?mini=true&url=${li_url}&title=${li_ttl}`;
                        break;
                        
                    case 'wa':
                        const wa_ttl = encodeURIComponent(formElem.querySelector(`#${req_id}_ttl`).value);
                        const wa_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        shrLnk = `https://api.whatsapp.com/send?text=${wa_ttl}: ${wa_url}`;
                        break;
                        
                    case 'pn':
                        const pn_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const pn_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://www.pinterest.com/pin/create/button?url=${pn_url}&description=${pn_txt}`;
                        break;
                        
                    case 'rd':
                        const rd_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const rd_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://reddit.com/submit?url=${rd_url}&title=${rd_txt}`;
                        break;
                        
                    case 'tg':
                        const tg_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const tg_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://telegram.me/share/url?url=${tg_url}&text=${tg_txt}`;
                        break;
                        
                    case 'tb':
                        const tb_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const tb_ttl = encodeURIComponent(formElem.querySelector(`#${req_id}_ttl`).value);
                        const tb_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${tb_url}&title=${tb_ttl}&caption=${tb_txt}`;
                        break;
                        
                    case 'yh':
                        const yh_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://compose.mail.yahoo.com/?body=${yh_txt}`;
                        break;
                        
                    case 'ln':
                        const ln_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        shrLnk = `https://line.me/R/msg/text/?${ln_url}`;
                        break;
                        
                    case 'ok':
                        const ok_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        const ok_txt = encodeURIComponent(formElem.querySelector(`#${req_id}_txt`).value);
                        shrLnk = `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${ok_url}&title=${ok_txt}`;
                        break;
                        
                    case 'vk':
                        const vk_url = encodeURIComponent(formElem.querySelector(`#${req_id}_url`).value);
                        shrLnk = `https://vk.com/share.php?url=${vk_url}`;
                        break;
                        
                    case 'gm':
                        const gm_rcp = encodeURIComponent(formElem.querySelector(`#${req_id}_rcp`).value);
                        const gm_sbj = encodeURIComponent(formElem.querySelector(`#${req_id}_sbj`).value);
                        const gm_cc = encodeURIComponent(formElem.querySelector(`#${req_id}_cc`).value);
                        const gm_bcc = encodeURIComponent(formElem.querySelector(`#${req_id}_bcc`).value);
                        const gm_bdy = encodeURIComponent(formElem.querySelector(`#${req_id}_bdy`).value);
                        shrLnk = `https://mail.google.com/mail/?view=cm&to=${gm_rcp}&su=${gm_sbj}&body=${gm_bdy}&bcc=${gm_bcc}&cc=${gm_cc}`;
                        // shrLnk = `https://mail.google.com/mail/?view=cm&to=%7Bemail_address%7D&su=${}&body=${}&bcc=%7Bemail_address%7D&cc=%7Bemail_address%7D`;
                        break;
                        
                    case 'em':
                        const em_rcp = encodeURIComponent(formElem.querySelector(`#${req_id}_rcp`).value);
                        const em_sbj = encodeURIComponent(formElem.querySelector(`#${req_id}_sbj`).value);
                        const em_cc = encodeURIComponent(formElem.querySelector(`#${req_id}_cc`).value);
                        const em_bcc = encodeURIComponent(formElem.querySelector(`#${req_id}_bcc`).value);
                        const em_bdy = encodeURIComponent(formElem.querySelector(`#${req_id}_bdy`).value);
                        shrLnk = `mailto:${em_rcp}?subject=${em_sbj}&cc=${em_cc}&bcc=${em_bcc}&body=${em_bdy}`;
                        break;
                        
                    default:
                        throw new Error("An error occured while generating share links");
                }

                // Update the result fields
                formDfltRslt.textContent = shrLnk;
                formHTMLRslt.textContent = `<a href="${shrLnk}">Share</a>`;

                // Display the generated links
                formBox.classList.add("show");

                // Automatically scroll to bottom of page (primarirly for mobile)
                document.querySelector(".form_rslt_bdr").ontransitionend = () =>
                {
                    window.scroll(
                    {
                        top: document.documentElement.clientHeight,
                        behavior: "smooth",
                    });
                }
            }

            // Generate links on submission
            formElem.onreset = (e) => 
            {
                if(!(confirm("Reset form?"))) return e.preventDefault();
                formBox.classList.remove("show");
            }
        }
        catch(build_error)
        {
            console.error(build_error);
            setTimeout(() => alert("An error occured"), 100);
        }
    }
