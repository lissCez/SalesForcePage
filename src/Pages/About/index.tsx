import Card from "../../Components/Card";
import Menu from "../../Components/Menu";

export const About = () => {
    return (
        <>
            <Menu />
            <h1 className="Titulo">Quem somos</h1>
            <div className="cards">
                <Card
                    Img='https://s3-alpha-sig.figma.com/img/9a1a/1fc7/546daa903b79d82a513255604c3c6c92?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTUPJAXw8j64pfEDBUtGWCNxTEn0I8-T0z4dQ9gckhINSiDtAwUzImleOwo1NjbGcUndCzjNIkYSQKfEr0RGuzNjGDXS4CloQGjIEYUP9p6finZ1Vs1O--nsuBRCgmt~Ch10r-UcTGp2J8FPLMNkp5ngt3KJDjVunm~mxY3o9Upx1AoKdOHeGfXslZgzrZUsTwtcGzKR-WK-gRkNyOVNVetg04y7GMnwoZYr4YypGYlI-1xiZmwVi1e9jfIXPDiYL2OW3kn1IYyJV7Fip8DDuuV3lYS3MqvqFKxuNlhRWyuRrfQatffKZm6um0Sxm9emHv9mDnXbTmX07R26PcFRWg__'
                    Nome="Mirella da Silva Cruz Germano"
                    Rm="RM 552777"
                    IconGithub="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__"
                    IconLinkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />

                <Card
                    Img='https://s3-alpha-sig.figma.com/img/eb69/f21e/f7de999eeb9d0cd21017007bb93b0d79?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mh4G3a7mIR~ZsZUOJMYdz24CXTWIe2staNW3TU4lNvmyXTdj3tE~hTCbF1vMG5F4MqfPAWTd9WGb-qYyjzUJXVH2-yODWbjU~mmSmHFbOBwmE-q8eiUrtJUTBcRB7itg7g1MnxGMYgzv0wB91LZt~m-PiQb6QoVv7ZtG6g10nCgT-E26bzsnOpD-KfI-ov2jywuAIDNAaecHrpeKwrT8g7TTH4ikbKoub-vH1miYgYrMV0WgmkQGEFrcXSttaLtGQ~aT8chH8x4rk0BCDEVQhpidCBJZZD2ET86xuj1092vcWX3xXSeMG3ZpZ4ILvyB9osTezSitlaCc4TkVSWU4hA__'
                    Nome="Alissa Silva Cezero"
                    Rm="RM: 553954"
                    IconGithub="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__"
                    IconLinkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />

                <Card
                    Img='https://s3-alpha-sig.figma.com/img/60bc/b2ee/424c33ba8c8502b7254eee6831dcc4f8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gQPCVWLh8e-DU2XrsBmKuHebX-XoZtnybrgOsB8sh2UMTI-ZByBGpcrZ5cSEhNX5CE0xEb0W8ZM~e7oYy5rzTD5ri~xOj1rnq0EgcBtgfcaUPPrKE322LzPkjdTvjDtd4PCupQqtaTY-0T2Ha9teYKvxk5dFUxyV31jAasrLxLyZa3S75yMucwa7TbiFbjwXJiQ~4OMIArSLO~DRLzGG-JJvgg8oF5JouBu0zDGNSiGGjpWtcTyibnOWNGC1yF9iOtPG8uwEqUfVGDTVGvQ0s-2LLvDoXuRR0PrNg5yz0eLbtdAIKNTyuiI1YRecl8lDlEJh0VrBZUHEadHvc0ffgQ__'
                    Nome="Melissa Barbosa de Souza"
                    Rm="RM: 552535"
                    IconGithub="https://s3-alpha-sig.figma.com/img/87f9/2fd1/4c8591c754108cf93f886f9d2d258ee9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUjgV29JGh6BpmAazcD9bgXSj1sHKtf-PWV8W2sJpShYXAR7M51HwbMZ6gH5-rfod~xmfQwAbTGJk1KZaVqjIpHVEXKQnteeByRaFyayISWXBK3L63jGksVnhjw-FmDuYfGb0qRPob6fe5L5fU~i66~gyFNctkLb6GqVE~XnYXyV2U5MyjIYcEYJC7fIxFX8rplirI8yreo9ttve4JxvfXuhDbTXOSIu4Ty4cxeXTq6-jr89yHRt8GAI-k4QBvbB9DxFK0BFjVMgeysudBglT4tt7pIRM0-hJGL0thWvUCchiUDcqnVPSuzdh7J3h5rOXjrPGlSYvDt~~aKav831Sg__"
                    IconLinkedin="https://s3-alpha-sig.figma.com/img/3931/e3c2/b3ae1f61034aaa0c50010b97447c7088?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNUw9UNsBAgqrH0QWo5u-KZArwDuiBs5F1f6MG1wh9466mrsGXnKqQxj4UhDPkltxvaFUizvb93wKhoTKsM3Clnn0d8OvBK9HZnAkZpr8GJJdfllFkPHJ4oaKM89uJ4w3zMV3GT6TKmFf9lCf2J5voiCqm7OGFmoJn-GB0L8Exjw0a0KxFAJtiOOHXJWu-KXtqFyaZMMUErMoJ8X28StSNM0QqcTM9rJGFlZ4pkY0OGN434YrKdGdjSclqGbrwXAk6FKoHBgINDqjUu0~eRNq3qahSVZRuPRiRmS1yCCIcgr-oGCP6ITL5L0DBMXGYx9~cg7Lx98nnZd4mrifM94Wg__" />
            </div>
        </>

    );
};

export default About;